const CACHE_NAME = "offline-blog-v1";
const SITEMAP_URL = "/sitemap-0.xml";

function parseSitemap(text) {
  const urlPaths = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;

  while ((match = locRegex.exec(text)) !== null) {
    const url = new URL(match[1]);
    urlPaths.push(url.pathname);
  }

  return urlPaths;
}

async function fetchAllUrls() {
  const response = await fetch(SITEMAP_URL);
  const text = await response.text();
  const urlPaths = parseSitemap(text);
  return urlPaths;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.add(SITEMAP_URL);
      const urlPaths = await fetchAllUrls();
      return await cache.addAll([...urlPaths]);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");

  // Claim clients so the service worker is in control immediately
  event.waitUntil(clients.claim());

  // Delete old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => {
            console.log("Service Worker: clearing old cache", cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.target).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        // clone the response
        const responseClone = response.clone();

        // add response to cache
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    })
  );
});

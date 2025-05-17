const CACHE_NAME = "offline-blog-v1";

function parseSitemap(text) {
  const urlPaths = [];
  const urlRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(\/blog\/[^"']+)\1/g;
  let match;

  while ((match = urlRegex.exec(text))) {
    const href = match[2];
    // Filter out non-article links if needed
    if (href !== "/blog/" && !urlPaths.includes(href)) {
      urlPaths.push(href);
    }
  }

  return urlPaths;
}

async function fetchAllUrls() {
  const response = await fetch("/blog");
  const text = await response.text();
  const urlPaths = parseSitemap(text);
  return [...new Set(["/", "/blog", "/about", ...urlPaths])];
}

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      fetchAllUrls().then((urlPaths) => {
        console.log("Caching all requested URLs", urlPaths);
        return cache.addAll(urlPaths);
      });
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
    caches.match(event.request).then((cachedResponse) => {
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

var firebaseConfig = {
    apiKey: "AIzaSyBjex9XfksKP8_ARn5KPtq2bnL_ZjxuI8o",
    authDomain: "bonte-mybrand.firebaseapp.com",
    databaseURL: "https://bonte-mybrand.firebaseio.com",
    projectId: "bonte-mybrand",
    storageBucket: "bonte-mybrand.appspot.com",
    messagingSenderId: "281179086913",
    appId: "1:281179086913:web:62caf39f9dc4db63efe6c0",
    measurementId: "G-J10X7VM1ZY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()
  const ref = firebase.storage().ref()


  

  //Upload image
  const headerImage = document.querySelector("#cover-image")
  const coverimg = document.querySelector(".coverimg")
  headerImage.addEventListener("change", () => {
      const file = headerImage.files[0]
      const name = file.name

      const metadata = {
          contentType: file.type
      }

      const task = ref.child(name).put(file,metadata)

      task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
          coverimg.src = url
          coverimg.style.display = "flex"
      })
  })

  const blogForm = document.querySelector(".blog-form")

  blogForm.addEventListener('submit', (e) => {
      e.preventDefault()
      db.collection("blog-posts").add({
          Date: new Date(),
          title: blogForm.title.value,
          post: blogForm.content.value,
          coverImage: coverimg.getAttribute("src")
      })

      blogForm.title.value = ""
      blogForm.content.value = ""

  })
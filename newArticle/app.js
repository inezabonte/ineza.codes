import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
const ref = firebase.storage().ref()
const auth = firebase.auth()

auth.onAuthStateChanged(user => {
    if(!user){
      window.location.href = "../login/index.html"
    }
  })

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
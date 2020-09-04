import firebaseConfig from '../scripts/config.js'

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

//initialize variables
const imageInput = document.querySelector("#image-input")
const coverImg = document.querySelector(".coverimg")  
let id = coverImg.getAttribute("data-id")
// upload image to storage

imageInput.addEventListener('change', () => {
    const file  = imageInput.files[0]
    const name = file.name
    
    const metadata = {
        contentType: file.type
    }

    const task = ref.child(name).put(file, metadata)

    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        coverImg.src = url
        updateImage(url)
    })
})

//update firestore
function updateImage(url){
    db.collection("profile").doc(id).update({
        coverImage: url
    })
}

function renderImage (doc){
    coverImg.src = doc.data().coverImage
}

db.collection("profile").onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if(change.type == 'added') {
           renderImage(change.doc)
        }
    })
})

const administrator = document.querySelector(".administrator")
const dropdown = document.querySelector(".dropdown")
administrator.addEventListener("mouseenter", () => {
  dropdown.style.display = "flex"
})

administrator.addEventListener("mouseleave", () => {
  dropdown.style.display = "none"
})
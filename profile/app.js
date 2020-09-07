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

//Render the profile data
function renderProfile (doc){
    coverImg.src = doc.data().coverImage

    //render the email data
    const emailDiv = document.querySelector(".email")
    let email = document.createElement("input")
    email.setAttribute("type", "email")
    email.setAttribute("readonly", "true")
    email.setAttribute("value", doc.data().email)
    emailDiv.insertAdjacentElement("beforeend", email)
    
    //render phone number data
    const telDiv = document.querySelector(".phoneNumber")
    let phone = document.createElement("input")
    phone.setAttribute("type", "tel")
    phone.setAttribute("readonly", "true")
    phone.setAttribute("value", doc.data().phoneNumber)
    telDiv.insertAdjacentElement("beforeend",  phone)

    //render location data
    const locate = document.querySelector(".location")
    let location = document.createElement("input")
    location.setAttribute("type", "text")
    location.setAttribute("readonly", "true")
    location.setAttribute("value", doc.data().location)
    locate.insertAdjacentElement("beforeend", location)

    //render Twitter url
    const twitterDiv = document.querySelector(".twitter")
    let twitter = document.createElement("input")
    twitter.setAttribute("type", "url")
    twitter.setAttribute("readonly", "true")
    twitter.setAttribute("value", doc.data().twitterUrl)
    twitterDiv.insertAdjacentElement("beforeend", twitter)

    //render LinkedIn url
    const linkedDiv = document.querySelector(".linkedIn")
    let linkedIn = document.createElement("input")
    linkedIn.setAttribute("type", "url")
    linkedIn.setAttribute("readonly", "true")
    linkedIn.setAttribute("value", doc.data().linkedInUrl)
    linkedDiv.insertAdjacentElement("beforeend", linkedIn)


    //render GitHub url
    const githubDiv = document.querySelector(".github")
    let github = document.createElement("input")
    github.setAttribute("type", "url")
    github.setAttribute("readonly", "true")
    github.setAttribute("value", doc.data().githubUrl)
    githubDiv.insertAdjacentElement("beforeend", github)


    
}


//Retrieve the profile data
db.collection("profile").onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if(change.type == 'added') {
           renderProfile(change.doc)
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
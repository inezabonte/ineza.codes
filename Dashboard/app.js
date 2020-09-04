import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()

auth.onAuthStateChanged(user => {
  if(!user){
    window.location.href = "../login/index.html"
  }
})

//Logout
const logout = document.querySelector(".logout")

logout.addEventListener("focus", (e) => {
  e.preventDefault()
  auth.signOut().then(() => {
    window.location.href = "../login/index.html"
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
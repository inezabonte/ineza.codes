import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()

//Logout
const logout = document.querySelector(".logout")

logout.addEventListener("click", (e) => {
  e.preventDefault()
  auth.signOut().then(() => {
    window.location.href = "../login/index.html"
  })
})
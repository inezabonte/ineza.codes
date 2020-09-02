import firebaseConfig from "../scripts/config.js";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()

const newArticle = document.querySelector(".newArticle")

auth.onAuthStateChanged(user => {
    if(!user){
      newArticle.style.display = "none"
    }
  })
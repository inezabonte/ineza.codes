import firebaseConfig from "../scripts/config.js";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()

const posts  = document.querySelector(".posts")

auth.onAuthStateChanged(user => {
    if(user){
      //This is the newArticle container
      let newArticle = document.createElement("div")
      newArticle.setAttribute("class", "blog-post newArticle")

      //This is the anchr tag 
      let anchor = document.createElement("a")
      anchor.setAttribute("href", "../newArticle/index.html")
      
      // This is the image tag
      let image = document.createElement("img")
      image.setAttribute("src", "../Images/add.svg")
      
      anchor.appendChild(image)
      newArticle.appendChild(anchor)
      posts.insertAdjacentElement("beforeend", newArticle)
    }
  })
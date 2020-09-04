import firebaseConfig from "../scripts/config.js";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()

const posts  = document.querySelector(".posts")

//---------------------render list of articles to the DOM------------------------
function renderArticles(doc){
  //anchor tag that will link to the articles page
  let anchor = document.createElement("a")
  anchor.setAttribute("href", `../showArticle/index.html#/${doc.id}`)

  //container for the blog-post details
  let blogPost = document.createElement("div")
  blogPost.setAttribute("class", "blog-post")

  //media div to hold the cover image
  let media = document.createElement("div")
  media.setAttribute("class", "media")

  //image that is nested in the media div
  let image = document.createElement("img")
  image.setAttribute("src", `${doc.data().coverImage}`)
  media.appendChild(image)

  //the div that holds the blog title
  let titleDiv = document.createElement("div")
  titleDiv.setAttribute("class", "title")

  //the title itself
  let title = document.createElement("h3")
  title.textContent = doc.data().title
  titleDiv.appendChild(title)

  //append everything inside the blogpost div
  blogPost.appendChild(media)
  blogPost.appendChild(titleDiv)

  //append the blogpost inside the anchor tag
  anchor.appendChild(blogPost)

  //finally append to the DOM using the posts div
  posts.insertAdjacentElement("afterbegin", anchor)
}

//----------------------Getting articles from firebase-----------------------------


db.collection("blog-posts").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderArticles(doc)
  })
})



//----------------------Render the New Artcle button if admin is signed in-----------
auth.onAuthStateChanged(user => {
    if(user){
      //This is the newArticle container
      let newArticle = document.createElement("div")
      newArticle.setAttribute("class", "blog-post newArticle")

      //This is the anchor tag 
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
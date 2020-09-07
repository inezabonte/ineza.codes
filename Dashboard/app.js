import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()

auth.onAuthStateChanged(user => {
  if(!user){
    window.location.href = "../login/index.html"
  }
})

//Logout
const logout = document.querySelector(".logout")

logout.addEventListener("click", (e) => {
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



//Initialize the parent container of the posts
const postsDetails = document.querySelector(".posts-details")

//render the blog details
function renderBlog(doc){
  let blogPost = document.createElement("div")
  blogPost.setAttribute("class", "blog-post")
  blogPost.setAttribute("data-id", doc.id)

  let blogPostHeader = document.createElement("div")
  blogPostHeader.setAttribute("class", "blog-post-header")
  
  let blogPostTitle = document.createElement("h3")
  blogPostTitle.setAttribute("class", "blog-post-title")
  blogPostTitle.textContent = doc.data().title

  let timestamp = doc.data().Date.toDate()
  let dateObj = new Date(timestamp)
  let month = dateObj.toLocaleString('en-GB', {month: "short"})
  let year = dateObj.getFullYear()
  let date = dateObj.toLocaleString('en-GB', {day: "2-digit"})
  let result = `${date} ${month} ${year}`
  let publishDate = document.createElement("p")
  publishDate.textContent = `Published: ${result}`

  let blogEdits = document.createElement("div")
  blogEdits.setAttribute("class", "blog-edits")
  blogEdits.textContent = "Delete"

  blogPostHeader.appendChild(blogPostTitle)
  blogPostHeader.appendChild(publishDate)

  blogPost.appendChild(blogPostHeader)
  blogPost.appendChild(blogEdits)

  postsDetails.insertAdjacentElement("beforeend", blogPost)

  blogEdits.addEventListener("click", (e) => {
    let id = e.target.parentElement.getAttribute('data-id')
    db.collection("blog-posts").doc(id).delete();
  })

}

//get the blog details
db.collection("blog-posts").orderBy('Date').onSnapshot(snapshot => {
  let changes = snapshot.docChanges()
  changes.forEach(change => {
    if(change.type =='added'){
      renderBlog(change.doc)
    }else if(change.type == 'removed'){
      let div = postsDetails.querySelector(`[data-id=${change.doc.id}]`)
      postsDetails.removeChild(div)
    }
  })
})
// Your web app's Firebase configuration
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

//declare variables here
const db = firebase.firestore()
let blogPost = document.querySelector(".blog-post")
const form = document.querySelector('.make-comment')
const commentsSection = document.querySelector('.comments')
let blogTitle = document.querySelector('.blog-title')
const coverImg = document.querySelector(".coverImage")

//render the blog to the DOM
function renderBlogPost(doc){
    blogPost.innerHTML = doc.data().post
    blogTitle.textContent = doc.data().title
    coverImg.src = doc.data().coverImage
}

function renderComments(doc){
    let indiv = document.createElement("div")
    let details = document.createElement("div")
    let img = document.createElement("img")
    let nameHead = document.createElement("h3")
    let commnetIn = document.createElement("p")
    let reply = document.createElement("span")
    

    indiv.setAttribute("class", "individual-comments")
    indiv.setAttribute("data-id", doc.id)
    img.setAttribute("src", "../Images/user.svg")

    nameHead.textContent = doc.data().name
    commnetIn.textContent = doc.data().content
    reply.textContent = "reply"

    details.appendChild(nameHead)
    details.appendChild(commnetIn)
    details.appendChild(reply)

    indiv.appendChild(img)
    indiv.appendChild(details)

    commentsSection.appendChild(indiv)

}

//retreiving blog post
db.collection('blog-posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlogPost(doc)
    })
})

//retriving comments
db.collection('comments').orderBy('Date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if(change.type == 'added'){
            renderComments(change.doc)
        } else if(change.type == 'removed'){
             let div = commentsSection.querySelector(`[data-id=${change.doc.id}]`)
             commentsSection.removeChild(div)
        }
    })
})

//saving comment
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    db.collection('comments').add({
        name: form.name.value,
        content: form.comment.value,
        Date: new Date()
    })

    form.name.value = ""
    form.comment.value = ""
})

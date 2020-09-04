import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//declare variables here
const db = firebase.firestore()
const auth = firebase.auth()

auth.onAuthStateChanged(user => {
    if(!user) {
        document.querySelector(".management").style.display = "none"
    }
})

let link = window.location.href
link = link.split("/").reverse()
let id = link[0]



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

    //Date formatting
    let timestamp = doc.data().Date.toDate()
    let dateObj = new Date(timestamp)
    let month = dateObj.toLocaleString('en-GB', {month: "short"})
    let year = dateObj.getFullYear()
    let date = dateObj.toLocaleString('en-GB', {day: "2-digit"})
    let pDate = document.createElement("p")
    pDate.textContent = `By Ineza Bonte | Posted on ${date} ${month} ${year}`
    let editing = document.querySelector(".editing")
    editing.insertAdjacentElement("afterbegin", pDate)
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
db.collection('blog-posts').doc(id).get().then((doc) => {
    renderBlogPost(doc)
})

//retriving comments
db.collection('comments').where("blogid", "==", id).orderBy('Date').onSnapshot(snapshot => {
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
        Date: new Date(),
        blogid: id
    })

    form.name.value = ""
    form.comment.value = ""
})

import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//declare variables here
const db = firebase.firestore()
const ref = firebase.storage().ref()
const auth = firebase.auth()

auth.onAuthStateChanged(user => {
    if(user) {
        document.querySelector(".editing").style.display = "flex"
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

    //render the title of the blog
    let title = document.createElement("h2")
    title.textContent = doc.data().title
    blogTitle.insertAdjacentElement("beforeend", title)

    // Render the cover image
    let image = document.createElement("img")
    image.setAttribute("src", doc.data().coverImage)
    coverImg.appendChild(image)

    //render the blog post itself
    let content = document.createElement("p")
    content.textContent = doc.data().post
    blogPost.insertAdjacentElement("beforeend", content)
    

    //Date formatting
    let timestamp = doc.data().Date.toDate()
    let dateObj = new Date(timestamp)
    let month = dateObj.toLocaleString('en-GB', {month: "short"})
    let year = dateObj.getFullYear()
    let date = dateObj.toLocaleString('en-GB', {day: "2-digit"})
    let pDate = document.createElement("p")
    pDate.textContent = `By Ineza Bonte | Posted on ${date} ${month} ${year}`
    let details = document.querySelector(".blog-details")
    details.appendChild(pDate)

    
    //edit and upload the cover image
    const headerImage = document.querySelector("#cover-image")
    headerImage.addEventListener("change", () => {
        const file = headerImage.files[0]
        const name = file.name

        const metadata = {
            contentType: file.type
        }

        const task = ref.child(name).put(file, metadata)

        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            db.collection("blog-posts").doc(id).update({
                coverImage: url
            })
            image.setAttribute("src", url)
        })
    })
    
    // edit mode for  the title
    const editTitle = document.querySelector(".editTitle")
    const saveTitle = document.querySelector(".saveTitle")
    editTitle.addEventListener("click", () => {
        title.setAttribute("contenteditable", "true")
        saveTitle.style.display = "flex"
    })

    saveTitle.addEventListener("click", () => {
        title.setAttribute("contenteditable", "flase")
        saveTitle.style.display = "none"
        db.collection("blog-posts").doc(id).update({
            title: title.textContent
        })
    })
    // End of edit mode for the title

    // edit mode for the blog itself
    const editBlog = document.querySelector(".editBlog")
    const saveBlog = document.querySelector(".saveBlog")
    editBlog.addEventListener("click", () => {
        content.setAttribute("contenteditable", "true")
        saveBlog.style.display = "flex"
    })

    saveBlog.addEventListener("click", () => {
        content.setAttribute("contenteditable", "false")
        saveBlog.style.display = "none"
        db.collection("blog-posts").doc(id).update({
            post: content.textContent
        })
    })
}

//Render the comments
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

//--------------Editing the Blog--------------------
const toggleEdit = document.querySelector(".toggleEdit")
const editButton = document.getElementsByClassName("edit")

toggleEdit.addEventListener("click", () => {
    for(let i =0; i < editButton.length; i++){
        editButton[i].style.display = "flex"
    }
})



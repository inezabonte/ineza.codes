import firebaseConfig from  '../scripts/config.js'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

const queries = document.querySelector(".queries")

//render queries to the DOM
function renderQueries(doc){
    let indiv = document.createElement('div')
    indiv.setAttribute("class", "individualQuery")
    indiv.setAttribute("data-id", doc.id)
    
    //date
    let pDate = document.createElement('p')
    pDate.setAttribute("class", 'date' )
    let spDate = document.createElement('span')
    spDate.textContent = "Date: "
    pDate.appendChild(spDate)

    //convert timestamp to DD/MM/YYYY
    let timestamp = doc.data().date.toDate()
    let dateObj = new Date(timestamp)
    let month = dateObj.toLocaleString('en-GB', {month: "short"})
    let year = dateObj.getFullYear()
    let date = dateObj.toLocaleString('en-GB', {day: "2-digit"})
    let result = `${date}-${month}-${year}`
    pDate.insertAdjacentText("beforeend", result)

    //name
    let pName = document.createElement('p')
    pName.setAttribute("class", 'name')
    let spName = document.createElement('span')
    spName.textContent = "Name: "
    pName.appendChild(spName)
    pName.insertAdjacentText('beforeend', doc.data().name)

    //email
    let pEmail = document.createElement('p')
    pEmail.setAttribute("class", 'email')
    let spEmail = document.createElement('span')
    spEmail.textContent = "Email: "
    pEmail.appendChild(spEmail)
    pEmail.insertAdjacentText('beforeend', doc.data().email)

    //message
    let pMessage = document.createElement('p')
    pMessage.setAttribute("class", 'message')
    let spMessage = document.createElement('span')
    spMessage.textContent = "Message: "
    pMessage.appendChild(spMessage)
    pMessage.insertAdjacentText('beforeend', doc.data().message)

    //reply button
    let reply = document.createElement("div")
    reply.setAttribute("class", "reply")
    let pReply = document.createElement("p")
    let aReply = document.createElement("a")
    aReply.textContent = "Reply"
    aReply.setAttribute("href", `mailto:${doc.data().email}`)
    pReply.appendChild(aReply)
    reply.appendChild(pReply)

    //storing all the data inside the individualQuery div
    indiv.appendChild(pDate)
    indiv.appendChild(pName)
    indiv.appendChild(pEmail)
    indiv.appendChild(pMessage)
    indiv.appendChild(reply)

    queries.appendChild(indiv)

}


//reading queries
db.collection("messages").orderBy("date").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderQueries(doc)
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
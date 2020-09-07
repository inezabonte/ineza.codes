import firebaseConfig from '../scripts/config.js'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

const intro = document.querySelector(".intro")
const skills = document.querySelector(".skills")

// Render the content to the screen
function renderPortfolio(doc){
    // content of the intro
    let whatIDo = document.createElement("p")
    whatIDo.textContent = doc.data().whatIDo
    intro.insertAdjacentElement("beforeend", whatIDo)

    //content of the skills
    let mySkills = document.createElement("p")
    mySkills.textContent = doc.data().skills
    skills.insertAdjacentElement("beforeend", mySkills)
}


//retrieve data from the server
db.collection('portfolio').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPortfolio(doc)
    })
})



const projects = document.querySelector(".projects")

// render the projects to the screen
function renderProjects(doc) {
    let proj = document.createElement("div")
    proj.setAttribute("class", "indiv-project")

    let title = document.createElement("h3")
    title.textContent = doc.data().projectName
    proj.appendChild(title)

    let desc = document.createElement("p")
    desc.textContent = doc.data().description
    proj.appendChild(desc)

    projects.appendChild(proj)
}

db.collection("projects").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderProjects(doc)
    })
})
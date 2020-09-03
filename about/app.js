import firebaseConfig from "../scripts/config.js";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
const auth = firebase.auth()

const edit = document.getElementsByClassName('edit')

auth.onAuthStateChanged(user => {
    if(!user){
      for(let i = 0; i < edit.length; i++){
        edit[i].style.display = "none"
      }
    }
  })

const intro = document.querySelector(".intro")
const background = document.querySelector(".my-background")
const motivation = document.querySelector(".motivation")

function renderAbout (doc){
    let introText = document.createElement("p")
    introText.textContent = doc.data().intro
    introText.setAttribute("class", "introText")
    intro.insertAdjacentElement("beforeend", introText)


    let backgroundText = document.createElement("p")
    backgroundText.textContent = doc.data().background
    backgroundText.setAttribute("class", "backgroundText")
    background.insertAdjacentElement('beforeend', backgroundText)

    let motivationText = document.createElement("p")
    motivationText.textContent = doc.data().motivation
    motivationText.setAttribute("class", "motivationText")
    motivation.insertAdjacentElement("beforeend", motivationText)

    // start of edit mode for intro
    const editIntro = document.querySelector(".editIntro")
    const saveIntro = document.querySelector(".saveIntro")
    editIntro.addEventListener("click", () => {
      introText.setAttribute("contenteditable", 'true')
      saveIntro.style.display = "flex"
    })

    saveIntro.addEventListener("click", () => {
      introText.setAttribute("contenteditable", "false")
      saveIntro.style.display = "none"
      db.collection("about").doc('AkbElyVhbjj0QN3eU8XX').update({
        intro: introText.textContent
      })
    })
    //end of edit mode for Intro


    // start of edit mode for background
    const editBackground = document.querySelector(".editBackground")
    const saveBackground = document.querySelector(".saveBackground")
    editBackground.addEventListener("click", () => {
      backgroundText.setAttribute("contenteditable", 'true')
      saveBackground.style.display = "flex"
    })

    saveBackground.addEventListener("click", () => {
      backgroundText.setAttribute("contenteditable", "false")
      saveBackground.style.display = "none"
      db.collection("about").doc('AkbElyVhbjj0QN3eU8XX').update({
        background: backgroundText.textContent
      })
    })
    //end of edit mode for background


    // start of edit mode for background
    const editMotivation = document.querySelector(".editMotivation")
    const saveMotivation = document.querySelector(".saveMotivation")
    editMotivation.addEventListener("click", () => {
      motivationText.setAttribute("contenteditable", 'true')
      saveMotivation.style.display = "flex"
    })

    saveMotivation.addEventListener("click", () => {
      motivationText.setAttribute("contenteditable", "false")
      saveMotivation.style.display = "none"
      db.collection("about").doc('AkbElyVhbjj0QN3eU8XX').update({
        motivation: motivationText.textContent
      })
    })
    //end of edit mode for motivation

}

db.collection("about").onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if(change.type == 'added') {
           renderAbout(change.doc)
        }
    })
})


import firebaseConfig from '../scripts/config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
const myImage = document.querySelector(".my-image").style


function renderImage (doc){
   myImage.backgroundImage = `url('${doc.data().coverImage}')`
}

db.collection("profile").onSnapshot(snapshot => {
  let changes = snapshot.docChanges()
  changes.forEach(change => {
      if(change.type == 'added') {
         renderImage(change.doc)
      }
  })
})
import firebaseConfig from '../config.js'
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore()

const message = document.querySelector(".message")

message.addEventListener('submit',  (e) => {
    e.preventDefault()

    db.collection("messages").add({
        date: new Date(),
        name: message.name.value,
        email: message.email.value,
        message: message.message.value
    })

    message.name.value = ""
    message.email.value = ""
    message.message.value = ""

})
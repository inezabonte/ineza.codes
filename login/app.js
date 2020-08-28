  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjex9XfksKP8_ARn5KPtq2bnL_ZjxuI8o",
    authDomain: "bonte-mybrand.firebaseapp.com",
    databaseURL: "https://bonte-mybrand.firebaseio.com",
    projectId: "bonte-mybrand",
    appId: "1:281179086913:web:62caf39f9dc4db63efe6c0",
    measurementId: "G-J10X7VM1ZY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //make auth and firestore services
  const auth = firebase.auth()
  const db = firebase.firestore()

  const loginForm = document.querySelector('.login-form')


//login form
  loginForm.addEventListener('submit', (e) => {
      e.preventDefault()

      //get user data
      const email = loginForm['email'].value
      const password = loginForm['password'].value

      auth.signInWithEmailAndPassword(email, password).then((cred) => {
          loginForm.reset()
      })
  })
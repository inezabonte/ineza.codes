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

  const auth = firebase.auth()

  //Logout
  const logout = document.querySelector(".logout")

  logout.addEventListener("click", (e) => {
    e.preventDefault()
    auth.signOut().then(() => {
      window.location.href = "../login/index.html"
    })
  })
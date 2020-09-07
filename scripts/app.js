const nav = document.querySelector(".nav-links")

// Show dashboard button when user is logged in
const auth = firebase.auth()
let dashboard = document.createElement("li")
let link = document.createElement("a")
link.setAttribute("href", "../Dashboard/index.html")
link.textContent = "Dashboard"
dashboard.appendChild(link)

auth.onAuthStateChanged(user => {
    if(user){
        document.querySelector(".login").style.display = "none"
        nav.insertAdjacentElement("beforeend", dashboard)
    }
})

//navlinks slide 
const navSlide =  () => {
    const burger = document.querySelector(".burger")
    const navlinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navlinks.forEach(link => {
            link.style.animation = `navlink-fade 0.5s ease forwards`
        })
    })

    
}

navSlide()
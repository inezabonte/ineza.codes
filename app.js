const navSlide =  () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navlinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navlinks.forEach(link => {
            link.style.animation = `navlink-fade 0.5s ease forwards`
        })
    })

    
}

navSlide()
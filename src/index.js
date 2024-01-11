/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// modal window appears when page is loaded

// window.addEventListener('load', (e) =>{
//     const modalWindow = document.querySelector(".modal-window")
//     modalWindow.classList.toggle("visibility")
//     modalWindow.classList.add("animate")

//     console.log("hello")
// })


// or click button to open modal window

const clickForMore = document.querySelector(".for-more")

clickForMore.addEventListener('click', (e) =>{
    const modalWindow = document.querySelector(".modal-window")
    modalWindow.classList.toggle("visibility")
    modalWindow.classList.add("animate")

    console.log("hello")
})



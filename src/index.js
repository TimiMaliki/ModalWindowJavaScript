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
    modalWindow.classList.remove("visibility")
    modalWindow.classList.add("animate")

    //blur the background
    const sectionLayout = document.querySelector(".product")
    sectionLayout.classList.add("blur")

 // yes or no buttons 
 const btnOne = document.querySelector(".btn-1")
 const btnTwo = document.querySelector(".btn-2")

    if(btnOne.innerText === "No!, I did'nt" || btnTwo.innerText === "Yes!, I Loved it"){
        btnOne.addEventListener("click", (e) => {
            modalWindow.classList.add("visibility")
            sectionLayout.classList.remove("blur")
        })
        btnTwo.addEventListener("click", (e) => {
            modalWindow.classList.add("visibility")
            sectionLayout.classList.remove("blur")
        })
    }
})



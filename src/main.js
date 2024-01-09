
const modalBtnOne = document.querySelector(".btn-1")
const modalBtnTwo = document.querySelector(".btn-2")
const modalBtnThree = document.querySelector(".btn-3")

const modalWindowOne = document.querySelector(".modal-window-one")
const modalWindowTwo = document.querySelector(".modal-window-two")
const modalWindowThree = document.querySelector(".modal-window-three")

const closeIcon = document.querySelector(".close-icon")
const closeIconTwo = document.querySelector(".close-iconTwo")

const modal = document.querySelector(".modal-one")
const box = document.querySelector(".box")
const noBtn = document.querySelector(".btn-no")
const yesBtn = document.querySelector(".btn-yes")




modalBtnOne.addEventListener("click" , (e) => {
    modalWindowOne.classList.toggle("visibility")
    modalWindowOne.classList.add("animate")
    closeIcon.addEventListener("click" , (e) => {
        modalWindowOne.classList.add("visibility")
    })
    noBtn.addEventListener("click" , (e) => {
        modalWindowOne.classList.add("visibility")
    })
    if(yesBtn.innerText === "Yes, Confirm"){
        yesBtn.addEventListener("click" , (e) => {
            yesBtn.innerText = "successfull!"
            yesBtn.style.color = "#111"
            yesBtn.style.fontSize = "14px"
        })
    }
})

modalBtnTwo.addEventListener("click" , (e) => {
    modalWindowTwo.classList.toggle("visibility")
    modalWindowTwo.classList.add("animate")
    closeIconTwo.addEventListener("click" , (e) => {
        modalWindowTwo.classList.add("visibility")
    })
})

modalBtnThree.addEventListener("click" , (e) => {
    modalWindowThree.classList.toggle("visibility")

   
   
    
})






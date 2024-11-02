const closePopup = document.querySelector(".close-popup")
const showPopup = document.querySelector(".show-popup")
const form = document.querySelector(".form-section")

showPopup.addEventListener('click', ()=>{
    form.classList.add("show-popup")
})

closePopup.addEventListener('click', ()=>{
    form.classList.remove("show-popup")
})

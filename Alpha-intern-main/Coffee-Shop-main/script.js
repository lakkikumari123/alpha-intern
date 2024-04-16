const header = document.querySelector("header")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListener("click", () => {
    header.classList.toggle("mobile-menu-btn")
})
closeBtn.addEventListener("click", () => {
    menuBtn.click()
})
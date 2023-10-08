const p = document.querySelectorAll("p")
const button = document.querySelector("button")
const button2 = document.querySelector(".button")

function a(){
    const p2 = document.querySelector(".p")
    p2.classList.add("o")
}
function a2(){
    const p2 = document.querySelector(".p")
    p2.classList.remove("o")
}
button2.addEventListener("click", a2)
button.addEventListener("click", a)
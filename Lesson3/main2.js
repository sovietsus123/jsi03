const p = document.querySelector("p")
const button = document.querySelector("button")
button.textContent ="Dang ki"
p.textContent ="Free Robux"
button.classList.add("button1")
console.log(p)
console.log(button)

const h2 = document.querySelector("h2")
h2.classList.add("title")
const p2 = document.querySelector(".sub-title")
p2.classList.remove("sub-title")

function student(name,age,school){

}

function triple(x) {
    console.log(x*3)
}
triple(3)

var animals = ['Monkey','Tiger','Elephant']
function l(x){
    let a=x[x.length - 1]
    console.log(a)
}
l(animals)

function l2(x){
    console.log(x[0])
}
l2(animals)

function aler(){
    const h2 = document.querySelector("h3")
    h2.classList.add("red") 
}
button.addEventListener("click", aler)
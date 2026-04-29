console.log("hello sonu")

let h1 = document.querySelector("h1")
let para = document.getElementById("result")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

// Buttons

let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let submit = document.getElementById("submit")

// addition of two numbers

// num1 = 5
// num2 = 10
// result = num + num2
// console.log(result)

add.addEventListener('click', () => {

    let res = Number(num1.value) + Number(num2.value)
    para.innerHTML = res
})

sub.addEventListener('click', () => {

    let res = Number(num1.value) - Number(num2.value)
    para.innerHTML = res
})

mul.addEventListener('click', () => {

    let res = Number(num1.value) * Number(num2.value)
    para.innerHTML = res
})

div.addEventListener('click', () => {

    let res = Number(num1.value) / Number(num2.value)
    para.innerHTML = res
})




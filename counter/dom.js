let p = document.querySelector("p");

let btn = document.getElementById("increase");
let btn2 = document.getElementById("decrease");
let btn3 = document.getElementById("reset");

let num = 0;

btn.addEventListener("click", () => {
    num++;
    updatedisplay();
});

btn2.addEventListener("click", () => {
    num--;
    updatedisplay();
});

btn3.addEventListener("click", () => {
    num = 0;
    updatedisplay();
});


function updatedisplay() {
    p.innerText = num;
}   
updatedisplay();

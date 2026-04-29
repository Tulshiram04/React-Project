function watchclock(){
let now = new Date()

let hours = now.getHours()
let minutes = now.getMinutes()
let second = now.getSeconds()

let apmp = hours ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12

hours = hours < 10 ? "0" +hours : hours
minutes = minutes < 10 ? "0" +minutes : minutes
second = second < 10 ? "0" +second : second


document.getElementById("clock").innerText = `${hours}:${minutes}:${second}`
}

setInterval(watchclock,1000)
timewatch()
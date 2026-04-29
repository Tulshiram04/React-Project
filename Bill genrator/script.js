function genrateBill(){

let customer = document.getElementById("name").value;

let item1 = document.getElementById("item1").value
let price1 = Number(document.getElementById("price1").value)

let item2 = document.getElementById("item2").value
let price2 = Number(document.getElementById("price2").value)

let item3 = document.getElementById("item3").value
let price3 = Number(document.getElementById("price3").value)

let total  = price1 + price2 + price3

document.getElementById("cname").innerText=customer
document.getElementById("citem1").innerText=item1
document.getElementById("cprice1").innerText=price1
document.getElementById("citem2").innerText=item2
document.getElementById("cprice2").innerText=price2
document.getElementById("citem3").innerText=item3
document.getElementById("cprice3").innerText=price3
document.getElementById("ctotal").innerText=total
document.getElementById("box").style.display = "block";

}
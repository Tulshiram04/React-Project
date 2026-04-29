
function genrateCertificate(){
let input = document.getElementById("name").value;
let eng = Number(document.getElementById("eng").value);
let maths = Number(document.getElementById("math").value);
let phy = Number(document.getElementById("phy").value);

let total = eng + maths + phy;
let percentage = (total/300)*100;

let grade = "";

if(percentage >= 75){
    grade = "A"
}
else if(percentage >= 60){
    grade = "B"
}
else if(percentage >= 35){
    grade = "C"
}
else{
    grade = "fail"
}

document.getElementById("cName").innerText=input
document.getElementById("cEnglish").innerText=eng
document.getElementById("cMaths").innerText=maths
document.getElementById("cPhysics").innerText=phy
document.getElementById("cTotal").innerText=total
document.getElementById("cPercentage").innerText=percentage.toFixed(2)
document.getElementById("cGrade").innerText=grade
document.getElementById("certificate").style.display="block"
}





console.log("sonu")
let h1 = document.querySelector("h1")
let inpute = document.getElementById("text")
let btn = document.getElementById("task")
let p = document.getElementById("work")

btn.addEventListener("click",()=>{
    let taskText = inpute.value
    if(taskText%2===0){
      p.innerHTML=" Number is Even:"
    }
    else if(taskText%2!==0){
         
                p.innerHTML="Number is Odd:"
    }
    else
        {
        p.innerHTML="invalid:"
    }

})


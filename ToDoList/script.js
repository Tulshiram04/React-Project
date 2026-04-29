console.log("TODolist")

let Input = document.getElementById("text")
let btn = document.getElementById("task")
let workContainer = document.getElementById("work")

btn.addEventListener("click",()=>{
    let taskText= Input.value.trim();

     if (taskText === "") {
     alert = ("Please enter a task!");
        return;
    }
   
    let taskPara = document.createElement("p");
    taskPara.textContent = taskText;
    taskPara.classList.add("task"); // optional class for styling

    workContainer.appendChild(taskPara);

    // Clear input
    Input.value = "";
});
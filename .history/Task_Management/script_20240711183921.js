let todoContainer = document.querySelector('#todo');
let addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener("click", ()=>{
    let card=document.createElement("div")   //to dynamically create a div through js
    card.innerText="This is a card"
    card.placeholder="Enter a Task"
    card
})
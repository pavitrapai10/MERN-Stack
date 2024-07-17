let todoContainer = document.querySelector('#todo');
let addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener("click", ()=>{
    let card=document.createElement("div")   //to dynamically create a div through js
    // card.innerText="This is a card"
    // card.placeholder="Enter a Task"
    // card.type="text"
    // card.contentEditable=true    //content gets editable
    // card.className="card"


    //or we can use
    card.setAttribute("class", "card")
    card.setAttribute("contenteditable", true)
    todoContainer.append(card)

    //closures
    card.addEventListener("click", ()=>{
        //  card.innerText = ""
         console.log(card.innerText)
        if(card.innerText === "New Task"){
            card.innerText = ""
        }
    })

     // focus , blur
    card.addEventListener("blur", ()=>{
        if(card.innerText === ""){
            // card.remove()   // todo:  delete after 20 secs
            superCard.remove()
        }
    })


    // dropdown:

    let dropdown = document.createElement("select")
    dropdown.innerHTML = `
    <option value="todo">ToDo</option>
    <option value="inProgress">Progress</option>
    <option value="done">Done</option>
    `

    superCard.append(dropdown)



    dropdown.addEventListener("change", (eventDetails)=>{
         let userSelection = eventDetails.target.value   // inProgress
         // id of the column we want to move the card to
        //  console.log(userSelection)
        let columnToMove = document.getElementById(userSelection) // Progress column
         
        columnToMove.append(superCard)

    })



    todoContainer.append(superCard)


})

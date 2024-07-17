//for obj there is only one loop which is 'in' loop, so loop will iterate key by key
//in loop is also used in arrays but its made solely for obj hence it works slow in arrays
// let obj={
//     "name": "pavi",
//     "age": 21,
//     "city": "pune"
// }
// console.log(obj)
// for(let t in obj){
//     console.log(obj.t)  // dot syntax limitation, it cannot give t value as its a variable not inside obj
//     console.log(t, obj[t])

// }

//checking datatye of obj through loops
let obj={
    "name": "pipu",
    "age": 2,
    "city": "pune",
    true: "yes",
    first word: 
}
for(let t in obj){
    console.log(t, typeof(t))
}
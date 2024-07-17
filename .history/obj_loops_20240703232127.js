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
    "first word": "popu"
}
for(let t in obj){
    console.log(t, typeof(t))
    console.log(obj)
}
//in obj irrespective of what it looks it gets converted as string whether u write as string or not
//all keys are string
//but inside a string a the original datatype should be pure ex 10 should be 10 not 10th or something
//incase of numbers and boolean u can access it as no and boolean also as well as string
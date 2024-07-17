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
    "first word": "popu",
    10: "apple"
}
for(let t in obj){
    console.log(t, typeof(t))
    console.log(obj[true])
    console.log(obj["true"])
    console.log(obj[10])
    console.log(typeof obj) //datatype of obj as whole is object
    //like obj there is no datatype of arrays, they are special type of objects
}
//in obj irrespective of what it looks it gets converted as string whether u write as string or not
//all keys are string
//but inside a string a the original datatype should be pure ex 10 should be 10 not 10th or something
//incase of numbers and boolean u can access it as no and boolean also as well as string

let arr=[0,1,2,3]
console.log(typeof arr)   //ans comes object, where there are fixed keys 
//as array is an obj internally so
arr[100]="apple"  //updated
console.log(arr)  // u get apple at 100th index, but this is bad coding as its not continuous, 9
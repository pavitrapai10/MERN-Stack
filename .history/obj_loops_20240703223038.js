//for obj there is only one loop which is 
let obj={
    "name": "pavi",
    "age": 21,
    "city": "pune"
}
console.log(obj)
for(let t in obj){
    console.log(obj.t)  // dot syntax limitation, it cannot give t value as its a variable not inside obj
    console.log(t, obj[t])

}
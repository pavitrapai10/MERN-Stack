//it can accept a function and return a function
//example
// function hello(fun1){

//         fun1()

//         return()-> {}
    
// }

//inside one function you can return multiple functions   //study arrow and normal function
//inbuilt functions - filter, find, map, forEach, sort, reduce   these use hof - works only on arrays
//1 map
let arr=[10,20,30,40,50]
//square each of these no
for(let t of arr){
    console.log(t*t)
}
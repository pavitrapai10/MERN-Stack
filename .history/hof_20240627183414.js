//it can accept a function and return a function
//example
// function hello(fun1){

//         fun1()

//         return()-> {}
    
// }

//inside one function you can return multiple functions   //study double arrow and normal function
//inbuilt functions - filter, find, map, forEach, sort, reduce   these use hof - works only on arrays
//1 map
let arr=[10,20,30,40,50]
//square each of these no
for(let t of arr){
    console.log(t*t)
}
//map extracts value and index
//map will go to every value and call the function square, working like a loop
//map expects u to return something apart from value and index, whatever u r calculating 
//map returns an array by default, if u don't return something for a value it will be undefined
//it can accept a function and return a function
//example
// hof => higher order functions 


// function hello(fun1){
//    fun1()

//    return ()=>{}
// }

// function hello(){
//     console.log("A")
//     return function(){
//         console.log("B")
//     }
// }


// let x = hello() // A
// // x = ()=>{console.log("B")}
// x() // B



// function hello(){
//     console.log("A")
//     return ()=>{
//         console.log("B")
//         return ()=>{
//             console.log("C")
//         }
//     }
// }

// let x = hello()

// let y = x() 

// y()



// function greet(){
//     console.log("Good Monring")
// }


// function hello(){

//     return greet
// }

//inside one function you can return multiple functions   //study double arrow and normal function
//inbuilt functions - filter, find, map, forEach, sort, reduce   these use hof - works only on arrays
//1 map
// let arr=[10,20,30,40,50]
// //square each of these no
// for(let t of arr){
//     console.log(t*t)
// }
//map extracts value and index
//map will go to every value and call the function square, working like a loop
//map expects u to return something apart from value and index, whatever u r calculating 
//map returns an array by default, if u don't return something for a value it will be undefined


//forEach - just like normal for loop which won't return anything, otherwise map and forEach r same
//advantage- u can write code in 1 line with functions otherwise for, while loop are 3-4 lines code
//normal for and while loop are always faster than these functions
//filter will go value by value like map
//filter will also return something but not like map for every value, it returns only for conditions which r true
//for true 10 will be returned




//reduce - reduce a no of values into one value
//2 parameters- 2nd parameter is default value based on problem
//default value if u forget 2nd value will be 0th index
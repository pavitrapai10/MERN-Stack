//passing function in function as argument is called callback
//function without a name is called anonymous function
// function hello(p1,p2,p3,p4,p5,p6){
//    console.log(p1,p2,p3,p4,p5,p6)
// }


// let x1 = 10
// let x2 = 20.5
// let x3 = "hello"
// let x4 = true
// let x5 = [10,20,30]
// let x6 = {name:"ram",age:25}

// functional values: 


// hello(x1,x2,x3,x4,x5,x6)


// function hello(n, fun1){
//     // n = 100
//     // fun1 = ()=>{console.log("Good Morning")}

//     console.log(n) // 100
//     fun1()

// }


// let x = 100
// let greet = ()=>{console.log("Good Morning")}

// hello(x, greet())

// // hello(x, greet)



// function hello(n, fun1){
//     console.log("Going inside hello function")
//     // n = 15
//     // fun1 = 
    
//     console.log(n) // 100
//     console.log(fun1)
//     // fun1()

// }

// let greet = ()=>{
//     console.log("Good Morning")
//     return 1000
// }

// // let x = greet() // undefined

// // console.log(x)

// // let x = 100

// // hello(10+5, greet) // argument  --> this greet is called as callback, passing a functional value inside argument
//if it was greet() its not callback, greet is callback
//



// function hello(n, fun1){
//    // n = 100
//    // fun1 = ()=>{console.log("Good Morning")}

//     console.log(n)
//     fun1()
// }



// // let x = 100

// // let greet = ()=>{console.log("Good Morning")}

// hello(100, ()=>{console.log("Good Morning")})




// No name or anonymous function: 


// function (){
//     console.log("Good Morning")
// }

// ()


// ()=>{
//     console.log("Good Morning")
// }






// function hello(n, fun1){
//     // n = 100
//     // fun1 = ()=>{console.log(10+20)}
//     // // fun1 = ()=>{console.log(30)} wrong
 
//      console.log(n)
//      fun1()
//  }
 
 
 
 // let x = 100
 
 // let greet = ()=>{console.log("Good Morning")}
 
//  hello(100, ()=>{console.log(10+20)})



//  function test(){
//      console.log(10+20)
//  }

//  test()
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


function hello(n, fun1){
    // n = 100
    // fun1 = ()=>{console.log("Good Morning")}

    console.log(n) // 100
    fun1()

}


let x = 100
let greet = ()=>{console.log("Good Morning")}

hello(x, greet())

// hello(x, greet)
//resuisng code again n again is not good, we can use loops but still
//functions are very very important, building block of dev
//func is basically giving a name to remember it everytime
//syntax is function functionname whwere first word's first letter is small and joining word;s first letters  - camelcase
//will be capital followed by a parenthesis
// function sumOfTwoNumbers(a,b) {  //a,b are parameters
//     // let a =10
//     // let b=20
//     sum=a+b
//     console.log(sum)  // untill u call func nothing will be printed
// }
// sumOfTwoNumbers(10,30)
// sumOfTwoNumbers(10,20)
// sumOfTwoNumbers(20,4)  //it will print multiple times, to print dynamic give parameters and comment a=10, b=20


// function pattern(n) {    //(n) is parameter of func
//     for(let i=1;i<=n;i++){
//         let str=""
//         for(let j=1; j<=i;j++){      //body of func
//             str=str+"*"
//         }
//         console.log(str)

//     }
// }
// pattern(10)  //(10) is argument of func
 

// function pattern(ch) {   //character ch - put any char
//     for(let i=1;i<=5;i++){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str=str+ch
//         }
//         console.log(str)

//     }
// }
// pattern("*")
// pattern(1)
// pattern("a")


// Take a number  => 345
// find the sum of the digits of the number  3^1+4^1+5^1 = 12
// find the square of the sum of digits  3^2 + 4^2 + 5^2 = 9 + 16 + 25 = 50
// find the cube of the sum of digits 3^3 + 4^3 + 5^3 = 27 + 64 + 125 = 216





// function sumOfDigits(n, po){
//     let sum = 0
//     while(n>0){
//         let last = n % 10
//         sum = sum + last**po
//         n = parseInt(n/10)
//     }

//     console.log(sum)

// }



// sumOfDigits(345, 1)
// sumOfDigits(345, 2)
// sumOfDigits(345, 3)

//if you need value outside the function u need to use return, only writing console.log will be printed on screen but no
//value will get returned. So no operations or formula outside the function will work. It will print nan if u don't use return
//ex incase of factorial question

//there are two ways to write function - normal function style and a modern one which is arrow syntax
//arrow syntax just like we saw on chrome inspect console js runs function in diff way and node in diff way
//if we write 
// function hello() {
//     console.log("good morning")
// }
// hello()  //prints good morning 
// console.log(hello()) //prints undefined
// console.log(hello)  //prints [function: hello]  //but in browser js gives hello as a variable and its value as the parenthesis () {} part

//arrow function
//instead of writing function directly write function name followed by = () => {}
let hello=()=>{   //since hello is like a variable here we use let
    console.log("good morning")
}
hello()
let x= hello
x()   //run on chrome console , hello is variable so assigned to x, so x also has functional value as seen on chrome console 
       //so we can call x as function 

//when there is nothing inside function except return, u can skip writing return and also parenthesis
//example
let 

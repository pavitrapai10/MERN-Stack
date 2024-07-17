//find ncr, take n and r values
//ans = (n!/(n-r!)*r!)



// let n=10
// let r=4

// function nCr(n,r){
//     let f1=1
//     for(let i=1;i<=n;i++){
//         f1=f1*i
//     }
//     let f2=1
//     for(let i=1;i<=r;i++){
//         f2=f2*i
//     }
//     let f3=1
//     for(let i=1;i<=(n-r); i++){
//         f3=f3*i
//     }
//     console.log(f1,f2,f3)
//     console.log(f1/(f2*f3))
// }

// nCr(10,4)    //But we are repeating same code loop so what's the use of function
//here we use function correctly  reusing code
// function factorial(p){
//     let fact=1
//     for(let i=1; i<=p; i++){
//         fact*=i
//     }
//     // console.log(fact)    //just printing this won't return value

//     return fact         //need to use return so fact can work outside this loop as function
    
// }
// let n=10
// let r=4
// // factorial(n)
// // factorial(r)
// // factorial(n-r)

// let ncr = factorial(n)/(factorial(r)*factorial(n-r))

// console.log("ncr", ncr)    //it will print 210 which is nCr of 10C4



//q2
//lets have  a no 456
//
//find ncr, take n and r values
//ans = (n!/(n-r!)*r!)

function factorial(p){
    let fact=1
    for(let i=1; i<=p; i++){
        fact*=i
    }
    // console.log(fact)    //just printing this won't return value

    return fact         //need to use return so fact can work outside this loop as function
    
}
let n=10
let r=4
factorial(n)
factorial(r)
factorial(n-r)

let 
//find ncr, take n and r values
//ans = (n!/(n-r!)*r!)

function factorial(p){
    let fact=1
    for(let i=1; i<=p; i++){
        fact*=i
    }
    console.log(fact)    //just printing this won't return value
    return fact
}
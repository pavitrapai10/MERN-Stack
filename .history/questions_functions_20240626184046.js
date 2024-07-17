//find ncr, take n and r values
let n =10
let r=4
//ans = (n!/(n-r!)*r!)
function factorial(){
    let fact=1
    for(let i=1; i<=n; i++){
        fact*=i
    }
    return fact
}

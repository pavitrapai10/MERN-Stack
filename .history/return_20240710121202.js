//works as break, value will be returned to line which called it - anything below return does not executes
//works same as console.log() so its optional depending on problems whether to use return or console.log
function sum(a,b) {
    let ans= a+b
    console.log(ans)  //here 30 prints as its before return and function sum is called
    return ans //this value of ans gets stored to sum(10,20) when its called
}
let x = sum(10,20)
console.log("x", x)  //that stored value of ans gets printed here as x

function hello(){
    console.log("Good Morning")   //this will be printed
    return "hello"    //this string hello will get stored 
    console.log("Good Afternoon")  //this won't print as anything after return is not executed
}
let k = hello()  
console.log("k", k)  //the stored string hello 
//resuisng code again n again is not good, we can use loops but still
//functions are very very important, building block of dev
//func is basically giving a name to remember it everytime
//syntax is function functionname whwere first word's first letter is small and joining word;s first letters 
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


function pattern() {
    for(let i=1;i<=n;i++){
        let str=""
        for(let j=1; j<=i;j++){
            str=str+"*"
        }
        console.log(str)

    }
}
pattern(*)
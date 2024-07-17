//write a program that reverses a given string 
//i/p -> hello
// o/p -> olleh

//1st approach
// let str="hello"
// let revstring = ""
// for(i=str.length-1; i>=0; i-- )
   
// revstring = revstring+str[i]

// console.log(revstring) // olleh

//to print hello

//2nd approach
//like 2+3=3+2, in strings "a"+"b"!= "b"+"a" its not commutative

//3rd approach
//split -> converts string to array using a breakpoint
//join -> converts array to string using breakpoint
//reverse -> works on array not on string hence above two steps
// let str="hello" 
// console.log(str.split("").reverse().join(""))



//q2 sum of digits- take a string and return sum of its digits, i/p-> "123"  , o/p=6
// let str="123"
// let sum =0
// for(let t of str){
//     console.log(t, typeof t)
//     sum = sum + +t    //if only sum + t written it gives 0123 ans
// }
// console.log(sum)





//q3 immutable strings. Implement a program that replaces all occurences of 'Q' with 'P' in "Quality"
// let str="Quaqlity"
// let newstr = str.replaceAll("Q","P") //prob with this func is if small letters are there then it won't replace and viceversa
// newstr=newstr.replaceAll("q", "p") //hence add this as well
// console.log(newstr)

// let str='QUALITY'
// let newStr=''
// for(let l of str){
//     if(l==='Q'){
//         newStr+='P'
//     }
//     else{
//         newStr+=l
//     }
// }
// console.log(newStr)


//q4 char case sensitivity - 
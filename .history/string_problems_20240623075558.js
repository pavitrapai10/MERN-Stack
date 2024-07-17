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



//q
// let a = "Pavitra"
// let b = "Pai"
// let ans = a+b   //here in strings + is concatenation (joining)
// console.log(ans , typeof ans)   //if u add a number and string still its a string(as string datatype > number datatype)


// let c=10
// let d = true //bool is smaller datatype than number hence true -> 1, false -> 0
// let result = c+d   //10+1=11
// console.log(result, typeof result)


// let str1="ramesh"
// let str2 = false // string>bool hence rameshfalse
// let str3 = str1+str2
// console.log(str3, typeof str3)

//strings mean any values written in single quote,  double quote or back quotes (below esc )
// backquote supports multiline statements - \\
//single dounle quotes are same but back quotes have special advantage if used for strings

// let a=100
// let str1="The value of a is ${a}"   //string template literals - for dynamic value printing



// //to create multiline statements using " " use \ backslash at end of all lines (no space also after \)
// let str2 = "i am like this \
// why i m like this \
// meri marziii oveeiiaaaa oveeeioo"
// console.log(str2)
// let str= `pavi is dancinggggg      hehe`
// console.log(str)


// let str4="hello"
// console.log(str4.length)
// //to find index with big bracket syntax(in this case if value not present it gives undefined)
// console.log(str4[9])   
// //or u can use charAt(in this case if value not present it gives nothing)
// console.log(str4.charAt(9))  //mostly unused nowadays


//loops
let str="hello"
for(let i=0; i<str.length; i++){
    console.log(str[i])
} //for loop


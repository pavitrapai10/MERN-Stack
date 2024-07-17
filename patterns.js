// *****
// *****
// *****
// ***** 


// for(let line = 1; line<=4; line = line+1){

//     let str = ""
//     for(let col = 1; col<=5; col = col+1){
//         str = str + "*"
//     }
//     console.log(str)

// }

// line = 1, str = "" ,  col (1-5) => "*****"
// line 2,  str = "" , col (1-5) => "*****"
// line 3,  str = "" , col (1-5) => "*****"
// line 4,  str = "" , col (1-5) => "*****"



// *
// **
// ***
// ****
// *****


// for(let line = 1; line<=5; line = line+1){

//     let str = ""
//     for(let col = 1; col<=line; col = col+1){
//         str = str + "*"
//     }
//     console.log(str)

// }

// line 1 => col 1 - 1 => "*"
// line 2 => col 1 - 2 => "**"
// line 3 => col 1 - 3 => "***"
// line 4 => col 1 - 4 => "****"
// line 5 => col 1 - 5 => "*****"




// *
// ***
// *****
// ********
// **********

// let x = 1
// for(let line = 1; line<=5; line = line+1){

//     let str = ""
//     for(let col = 1; col<=x; col = col+1){
//         str = str + "*"
//     }
//     console.log(str)

//     x = x+2

// }


// line 1 => col 1 - 1 => "*" ,  x = 3

// line 2 => col 1 - 3 => "***" , x = 5

// line 3 => col 1 - 5 => "*****" , x = 7



// 1
// 12
// 123
// 1234
// 12345



// for(let line = 1; line<=5; line = line+1){

//     let str = ""
//     for(let col = 1; col<=line; col = col+1){
//         str = str + col // "1234"
//         // col => 1 - 1 
//         // col => 1 - 2
//         // col => 1 - 3
//     }
//     console.log(str)

   

// }



// 1
// 22
// 333
// 4444
// 55555


for(let line = 1; line<=5; line = line+1){

    let str = ""
    for(let col = 1; col<=line; col = col+1){
        str = str + line 

        // "1"
        // "22"
        // "333"
        
    }
    console.log(str)

}
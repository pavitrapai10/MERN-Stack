//print 
// *
// *
// *
// *
// *

// for(let i=1;i<=5;i++){
//     console.log("*")
// }

//print in one line *****
//in js console.log prints everything on new line so we use a diff approach of adding a string
// let str = ""
// for(let i=1;i<=5;i++){
//     str=str + "*" + " "
//i=1 -> "*"
//i=2 -> "**"
//i=3 -> "***"
//i=4 -> "****"
 //i=5 -> "*****"
//     }
//     console.log(str)     //if print is inside loop it will print a pattern of stars from 1 to 5

// let str = ""
// for(let i=1;i<=5;i++){
//     str=str + "*" + " "
//     console.log(str)
//     }

// print *****
    //   *****
    //   *****

for(let line=1; line<=3; line++){
    let str = ""
    for(let i=1;i<=5;i++){
    str=str + "*" + " "
    console.log(str)
    }
    console.log(line)

}

         
// if u want to print no from 1 to 10
// console.log(1)
// console.log(2)
// .
// .
// . 
//but if u want to print 1 to 100 manually not possible, hence we use loops to do same thing repeatedly until stopped
// types of loops
// 1. for loop
// 2. while loop
// 3. do while loop   not much used
// for(initialisation;CSSConditionRule;updation)

// for(let i = 1 ; i<=5 ; i++){
//     console.log(i)
// }

// for(let i=1;i<=5;i=i+1){
//     console.log("pavi")
// }


// for(let i = 1 ;  i<=5;  i = i+2){

//     console.log(i) // 1,3,5

// }


// for(let i = 1 ;  i<=5;  i = i+10){

//     console.log(i) // 1

// }


// for(let i = 5 ;  i>=1;  i = i-1){

//     console.log(i) // 5,4,3,2,1

// }


// for(let i = 5 ;  i<=1;  i = i-1){

//     console.log(i)  // no output

// }


// for(let i = 2 ;  i%2==0;  i = i+1){

//     console.log(i) // 2

// }


//while loop
//in for loop u can place initialisation and updation in diff places
//let i=1
//for( ;i<=1; ){
//i=i+1
//console.log(i)
//}    inspired by this type of for loop we get while loop



// let i=1
// while(i<=5){

//     console.log(i)
//     i=i+1
// }

//get all digits seperately printed
// let n = 1257

// step 1
// let last = n%10  //7
// n=parseInt(n/10)  //125.7 -> 125

// step2
// last=n%10  //5
// n=parseInt(n/10) //12.5 -> 12

// step 3
// last=n%10  //2
// n=parseInt(n/10) //1.2 -> 1

// step 4

// last=n%10  //1   repeated statements so use loops for this task
//n=parseInt(n/10)  //0.1 -> 0   stop when n is 0

//while loop
// let n =1257
// while(n>0){
//     let last=n%10
//     console.log(last)
//     n=parseInt(n/10)
// }


//for loop

// let n = 1257
// for (i = n; i>0; i=parseInt(i/10)){
//     let last = i%10
//     console.log(last)
// }




//same q if u want to print original format, as we know this above code of while loop extracts no from end
//first reverse a no then print while loop as it is, to reverse *10 + (multiply by 10 and add)
//if u print console.log(rev) inside while loop u will get step wise ans 7 75 752 7521, to get main ans print outside while loop
let n = 1257
let rev = 0
while(n>0){
    let last = n%10
    rev=rev*10+last
    
    n=parseInt(n/10)
}
console.log(rev)
n = rev
while(n>0){
    let last=n%10
    console.log(last)
    n=parseInt(n/10)
}





// Q1: 

// assume some values of p(Principal), r(Rate of Interest) and t(Time) are given. 

// Si = (p*r*t)/100

// CI  two steps 
// amt = p(1+r/100)^t
// ci = amt-p

// let p = 100000
// let r = 10 
// let t = 5 

// let si = p*r*t/100

// let amt = p*(1+r/100) ** t

// let ci = amt - p

// console.log(`Simple Interest is ${si}`) 
// console.log(`Compound Interest is ${ci}`)


// let a = 34
// check if it even or odd
// if(a%2 == 0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }



// let n = 34.1
// // check if this is a decimal number or not
// let p =  parseInt(n) // 34

// if(n == p){
//     console.log("Not a decimal number")
// }
// else{
//     console.log("Decimal number")
// }



// take a 2 digit number and check if reverse of that number is same as original number


// let a = 47 // 74 

// //  48 => 84

// let lastDigit = a%10 // 7
// let firstDigit = parseInt(a/10)     // 47/10 => 4.7

// if(lastDigit == firstDigit){
//     console.log("Same")
// }
// else{
//     console.log("Not Same")
// }


// take a 3 digit number number anc check if  original number is same as reverse of that number

// n = 437

// 121


// Enter number of electricity units consumed and calculate amount to pay, based on the rules below
// For first 50 units, Rs: 1/unit
// For next 100 units, Rs.2/unit
// For next 100 units, Rs. 3/ units
// For units above 250, Rs.4/units
// For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.

// Constraints:
// 0 <= number of units <= 1000

// Input:
// An integer/float denoting the number of electrical units consumed
// Output:
// An integer/ float denoting the electrical charge.

// Example:
// Input:
// 120

// Output:
// 228

// Explanation :
// Total number of units = 120
// First 50 units bill = 501 = 50
// Next 70 units bill = 702 = 140 (Rs. 2 will be charged for units 51-150)
// Total bill without additional charge = 140 + 50 = 190
// Additional 20% charge = 38
// Total bill with additional charge = 228


// 300  => 250 => 150 => 50

// 50*1 +100*2 +100*3 + 50*4 = 50 + 200 + 300 + 200 = 750
// 750*20/100 = 150
// 750 + 150 = 900


// let units = 300
// let bill

// if(units<=50){
//    bill = units*1
// }

// else if(units<=150){
//       bill = 50*1 + (units-50)*2
// }
// //151 - 250 

// else if(units<=250){
//   let bill = 50*1 +  100*2 + (units-150)*3
// }
// else if(units>250){
//     bill = 50*1 + 100*2 +100*3 + (units-250)*4
// } 


// if(bill>150){
//     bill = bill + bill*20/100
// }

// console.log(bill)




// let a = 100 


// if(a>130){
//     console.log("P")  

//     if(a>70){
//         console.log("Q")  
//     }
//     else{
//         console.log("R")
//     }
// }
// else{
//     console.log("S") 
    
//     if(a<50){
//         console.log("T")  
//     }
//     else if(a>35){
//         console.log("U")  
//     }
//     else{
//         console.log("V")
//     }
// }



// Print the first 100 natural numbers:

// 1 , 100


// for(let i = 1; i<=100; i=i+1){
//     console.log(i)
// }


// Print the first 100  odd numbers:


// for(let i = 1;  i<=199; i=i+2){
//     console.log(i) // 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29
// }


// print the first 87 odd numbers

// print all odd number between 1 and 87




// Print all the even numbers between 1 and 100
// count all the even numbers between 1 and 100 => 2,4,6,8,10 => 5
// sum of all the even numbers between 1 and 100 => 2+4+6+8+10 => 30



// for(let i = 1; i<=100; i++){
//     // console.log(i)
//     if(i%2==0){
//          console.log(i)
//     }
// }


// for(let i = 2; i<=100;  i=i+2){
//     console.log(i)
// }





// let count = 0
// // 1,2,3,4,5






// s1(w), s2, s3(w), s4, s5, s6(w), s7, s8, s9(w), s10


// count = 4




// sum  = 0

// s1(5), s2(10), s3(4), s4(6), s5(10), s6(20), s7(50), s8(10), s9(5), s10(5)


// sum = 125




// let sum = 0
// // 1,2,3,4,5,6,7,8,9,10
// for(let i = 1; i<=10; i++){

//     if(i%2==0){
       
//         //    conut = count+1

//         sum = sum + i 
//     // i = 2 => sum = 0+2 => 2
//     // i = 4 => sum = 2+4 => 6
//     // i = 6 => sum = 6+6 => 12
//     // i = 8 => sum = sum+i => 12+8 => 20
//     // i = 10 => sum = sum+i => 20+10 => 30
     
//     }

    


// }

// console.log(sum) // 30

// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 44
// Output:
// 40*42*44 = 70560



// let a = 10
// let b = 20



// // 576

// // 576%100 = 76
// // 76/10 = parseInt(7.6) => 7
// let mul = 1
// let flag = false

// for(let i = a; i<=b; i++){
//    let last2digit = i%100 
//    let secondLastDigit = parseInt(last2digit/10)

//    if(i%2==0 && secondLastDigit==4){ // 140,142,144,146,148
//     // console.log(i)
//      mul = mul*i 
//      flag = true 
     
//    }
// }

// // console.log(mul) // 1

// if (flag== true){
//     console.log(mul)
// }
// else{
//     console.log(0)
// }


// 1*140 => 140
     //mul = mul*i =>140*142 => 19880
     // mul = mul*i => 19880*144 => 2867520




// let take 3 numbers and find the biggest out of them, assuming all numbers are distinct.

// let a = 110
// let b = 12
// let c = 13


//  if(a>b && a>c){
//      console.log(a,"is the biggest number")
//  }
//  else if(b>a && b>c){
//         console.log(b,"is the biggest number")
//  }
//  else{
//         console.log(c,"is the biggest number")
//  }


// 

// let a = 20 // 1,2,4,5,10,20



// let n = 10 


// for(let i = 1; i<=n; i++){
//      // 1,2,3,4,5,6 ...10
//      // only those numbers which perfectly divide 10

//      if(n%i ==0){
//           console.log(i) // 1,2,5,10
//      }

// }


// let n => number is prime or not


// 2 => 1,2 
// 23 => 1,23

// 1 => 1 

// 10 => 1,2,5,10



let n = 5

// step 1 :  find factors of 37

// ste2:  count the number of factors

// ste3:  if count == 2 then prime else not prime


// let count = 0
// for(let i = 1; i<=n; i++){

//      if(n%i ==0){ //1,5
//           // console.log(i)
//           count = count+1 // 2
//      }
// }

// if(count == 2){
//      console.log(n,"is prime")
// }
// else{
//      console.log(n,"is not prime")
// }

// ternory, switch


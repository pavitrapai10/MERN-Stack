//splice - (very powerful func) don't use until taught
//slice - used to get subarrays subarrays is any continuous part of an array
//smallest subarrays single ement, biggest subarray - the whole array
//slice
// let arr=[10,20,30,40]
// console.log(arr.slice(1,3))   //give start and end value, prints end value-1 element
// let arr1= ['p','a','v','i','t','r','a']
// console.log(arr1.slice(0,4))  //end value not given then bydefault last value printed
//splice prints values from lhs to rhs, supports negative indexing

// let arr=['a','b','c','d','e']  //start counting -ve from rhs but give no as lhs( -1, -2, -3) from rhs
// console.log(arr.slice(-4,-1))  //end value + 1, always start from lhs in -ve also
//u can mix both positive and negative indexing
// console.log(arr.slice(2, -1))
//or 
// console.log(arr.slice(-4,4))


//2. indexOf and lastIndexOf
//finds index of first element when there are multiple same elements
// let arr1=[20,20,10,10,30,40,50]
// console.log(arr1.indexOf(10,2)) //2nd parameter is by default 0 even if u don;t mention, but mentioning means start searching for 10 from 3rd index
// console.log(arr1.lastIndexOf(10,3)) //gives last index from lhs, search for 10 till 3rd index

//common usecase is without using 2nd parameter for indexOf
//if u give some parameter and its not present, it returns -1 
//for lastIndexOf 2nd parameter value is bydefault length of the array

// let arr=[10,20,10,20,10,20,30,10,30,40,10,20]  //lets use indexOf in this problem
// //make a new array and every no should be only once in array not repeated
// //let uniqueArr=[10,20,30,40]
// //remove duplicates
// let uniqueArr=[]
// for(let t of arr){
//     if(uniqueArr.indexOf(t)===-1){  //here we used indexOf to check if particular value is present or not
//         uniqueArr.push(t)
//     }  //uniqueArr will have 10, then 20 as u will get -1 cuz 10,20 not present in uniqueArr so it will be pushed 
//     //to uniqueArr, now again 10 but its already present so it will give index 0 so it won't get pushed and so on
// }
// console.log(uniqueArr)



//q2 suppose we have vowels
let arr=['A', 'b','e','x','U','o','t']
//print all vowels
let vowelArr=['A','E','I','O','U','a','e','i','o']

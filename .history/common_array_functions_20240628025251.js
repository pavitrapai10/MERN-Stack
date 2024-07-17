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
let arr1=[20,20,10,10,30,40,50]
console.log(arr1.indexOf(10,))  //2nd parameter is by default 0 even if u don;t mention


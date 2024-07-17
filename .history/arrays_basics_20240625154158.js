// 10 20 30 40 5060 70 80 90 100

// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let e = 50;

// let arr = [10,20,30,40,50,60,70]
//arrays can contain mixed datatypes 
// let arr = [10, 10.5, true, "apple", "lichi"]

// console.log(arr)
// let arr=[10, 10.4, true, "pavi"]
// console.log(arr)
// console.log(arr.length)

//index : 0 to n-1
//access individual elements using index
// console.log(arr[3])

// let arr1=["mango", "apple", "litchi", "guava", "peaches"]
// let l=arr1.length
// console.log(arr1[l-1])
// //update array
// arr1[0]="banana"
// console.log(arr1)

//loops in arrays

//for or while loop
// let arr=[10,20,30,40,50,60]
// for(let i=0;i<=arr.length-1;i++){
//     console.log(i, arr[i])
// }


// for of loop
// for(let t of arr){   //t is 10 then 20 then 30 and goesn on value by value 
//     console.log(t)
// }

//for in loop  //goes index by index unlike of loop which goes value by value
// for(let k in arr){
//     console.log(k)
// }


//questions on array
//q print square of each number in array, change each value of array with its square
// let arr=[2,3,4,5,6,7]
// for(let t of arr){
//     console.log(t**2)
    
// }
// console.log(arr)



//by normal for loop
// for(let i=0; i<=arr.length-1;i++){
    //console.log(i, arr[i])
    //arr[0]=arr[0]**2
    //arr[1]=arr[1]**2
    //arr[2]=arr[2]**2
    //...
    //arr[n-1]=arr[n-1]**2
//     arr[i]=arr[i]**2
// }
// console.log(arr)

//change values and put it in new array
// let arr=[10,20,30,40]
// let newArr=[]
// for(let i=0;i<=arr.length-1;i++){
//     newArr[i]=arr[i]**2
// }
// console.log(newArr)

// let arr1=[2,3,4,5]
// let arr2=[0,1,2,3,]
// let arr=[]
// for(let i=0;i<=arr1.length-1;i++)
// arr[i] = arr1[i]+arr2[i] 
// console.log(arr)

//insert and delete
//push - adds an element in the end of an array
//pop - removes last element in array

let arr=[10,20,30,40]
// console.log("before delete", arr.length)
// delete arr[0]
// console.log("after delete", arr.length)  //if u dlt a element array length should change but here its 
//equal, before and after is same. hence delete arr[] is not a right way, so we use pop



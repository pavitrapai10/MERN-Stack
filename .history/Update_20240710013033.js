let str="papa"
str[0]= "k" //updating value kapa
console.log(str) 
//but its still papa, bcux strings are immutable
// str="ramesh"
// console.log(str)  //variable can be updated but you cannot modify any charachters of string at any index

//to update strings there are 2 methods - replace and replaceAll
console.log(str.replace("p", "k"))  //kapa
console.log(str.replaceAll("p", "k"))  //kaka

console.log(str) //value is still papa
//its not actually modified, they have returned a new string which is modified not actual string
//replaceAll may not work below version 17 of node js
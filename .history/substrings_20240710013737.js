let str="pavitra"
//slice in arrays returned subarray
//slice in string will return substring
//works same as arrays
console.log(str.slice(0,3))//pav   end value-1 will print
console.log(str.slice(-7,-4))  //-ve indexing -> start -1 from rhs and give index , 2nd value should be end value+1


//substring - hardly used now but has one advantage
console.log(str.substring(0,3))  //works only for positive index
//slice cannot go from rhs to lhs but substring can as it autoreverses internally
//never use this until and unless u r on notice period
console.log(str.slice(3,0))
co
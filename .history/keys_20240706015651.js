// let obj = {
//     "name": "John",
//      10 : "apple",
//     "age": 30,
//     true: "banana",
//     2: "orange",
//     "city": "New Delhi",
//     0 : "mango"
// }

// string, boolean, numbers

// number have highest priority => in ascending order
// remaining will be in the order of creation

// console.log(obj)


// let obj = {
//     10 : "apple",
//     "name": "John",
//     "age": 30,
//     "first word": "mom",
//     true: "yes",
//     "t": "hello",
// }


// let name = 100


// console.log(obj."first word")

// dot syntax has limitations

// dot syntax can only use those keys which are valid identifiers

// let t = "age"

// console.log(obj.t)

// dot syntax cannot access variables



// [] => square bracket syntax // universal syntax


// let obj = {
//     10 : "apple",
//     "name": "John",
//     "age": 30,
//     "first word": "mom",
//     true: "yes",
//     "t": "hello",
// }


// console.log(obj[10])

// let t = "age"

// console.log(obj[t]) // obj["age"] => 30

// console.log(obj["t"]) // obj["t"] => "hello"

//dynamic keys


// let c = 'city'
// let obj={
//     "age": 2,
//     c: "pune",
//     true: "yes",
//     "first word": "popu",
//     10: "apple"
// }
// console.log(obj)
//c will not change to city as c = city is variable and c in key is string so, but if u want to replace 
//c as city u can use big bracket syntax
let c = 'city'
let obj={
    "age": 2,
    [c]: "pune",
    [5+2]: "",
    "first word": "popu",
    10: "apple"
}
console.log(obj)  //[] - dynamic key
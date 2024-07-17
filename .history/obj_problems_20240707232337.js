// let obj={
//     name: "Pavitra",
//     subjects:["Maths", "Science", "English"],
//     grades: {"Maths": "A",
//         "Science": "B",         //obj inside an obj
//         "English": "C"
//     }
// }
// console.log(obj.subjects)
// //if u want to access particular subject use indexes or convert this as arr and use index
// console.log(obj.subjects[1])
// let arr=obj.subjects
// console.log(arr[1])

// //big bracket syntax
// console.log(obj["subjects"][1])

// let t=obj.grades
// console.log(t.English)

// console.log(obj.grades.English)


//find sum of all values
let obj={
    a:10,
    b:20,
    c:30,
    d:25,
    e:30
}
// let sum=0
// for(let t in obj){
//     console.log(obj[t])
//     sum=sum+obj[t]
// }
// console.log(sum)

//or find sum using inbuilt methods of objects

// let allkeys = Object.keys(obj)
// let allvalues= Object.values(obj)
//     console.log(allkeys)
//     console.log(allvalues)
// //it works for arrays also
// let arr=[11,12,13]
// console.log(Object.values(arr))


let personalDetails={
    name:"John",
    age:30,
    city:"New Delhi",
    country: "India"
}
 

let medicalDetails = {
    bloodGroup : "O+",
    weight: 70,
    height: 5.8
}

let workHistory={
    company: "ABC",
    experience: 5,
    role: "Software Developer"
    
}
//put all these objects combined in resume object
let resume = {
}

for(let k in personalDetails){
    console.log(k, personalDetails[k])
}
let newkey= k
let newvalue= personalDetails[k]
let resume[newkey]= newvalue
console.log(resume)
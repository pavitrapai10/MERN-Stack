let obj={
    name: "Pavitra",
    subjects:["Maths", "Science", "English"],
    grades: {"Maths": "A",
        "Science": "B",         //obj inside an obj
        "English": "C"
    }
}
console.log(obj.subjects)
//if u want to access particular subject use indexes or convert this as arr and use index
console.log(obj.subjects[1])
let arr=obj.subjects
console.log(arr[1])

//big bracket syntax
console.log(obj["subjects"])
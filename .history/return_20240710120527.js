//works as break, value will be returned to line which called it - anything below return does not executes
//works same as console.log() so its optional depending on problems whether to use return or console.log
function sum(a,b) {
    let ans= a+b
    console.log(ans)
    return ans
}
let x = sum(a,b)

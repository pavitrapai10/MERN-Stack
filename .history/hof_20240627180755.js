//it can accept a function and return a function
//example
function hello(fun1){
    return function(name){
        fun1(name)
    }
}
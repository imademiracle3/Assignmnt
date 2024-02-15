// Javascript Functions 
// Object: Practical creating and using functions in javascript

// No 1

function greet(name){
    console.log(`Hello ${name} whats the way gee`)
}
greet("lavish")

// No 2

const addNumbers = (j,k) => {
    return j + k 
}
addNumbers(2,4)
// No 3
function isEven(x){
    
    if(x = 2){ 
        return true
    } else{
        return false
    }
   
}

console.log(isEven(2))

// NO 4
let multiply = (num1,num2=1) =>{
    let number = num1*num2
   
    console.log(number)
}

multiply(4)

// No 5
function findMax(){
    let solMax = [1,2,3,4,5]
    console.log(Math.min(solMax))
}
findMax()

// No 6
const calculate=(a,b)=> {
let numv = a+b
console.log(numv)
//  gol = a-b
//  nol = a*b
//  dol = a/b
}
calculate(3,5)
// console.log(calculate(4,5))
// console.log(calculate(4,9))







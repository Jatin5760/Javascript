// Primitive Data type // Inka refernce copy hota hai memory se.

// 7 types : string, Number,boolean, null, undefined, Symbol,Bigint

// Non-Primitive (Reference Type) // inka reference memory me Direct allocate kiya jaa sakta hai. 

// Array, Objects, Functions

//Object aur browser event karlo js par mastery ho jayegi

// Java script is dynamically typed. 


const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId); // False 

const bigNumber = 6543435456431654564n //add n at last to make it bigInt

// outputs
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); //symbol
console.log(typeof bigNumber); //bigInt

// Non-primitive Data Types
const arr = ["ironman","thor","spiderman"]
const obj = {
    name: "Jatin",
    age: 20,
}
const func = function () {
    console.log("hello world!");
}

console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof func); //function object




// Stack (Primitive), Heap (Non-Primitive)
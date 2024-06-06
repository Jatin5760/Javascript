// Singleton

//Constructor se banega object toh hamesha singleton banega.

// Object literal 

//Object.create // Constructor Method hai issi se hi singleton banta hai 


const mySym = Symbol("key1")

const JsUser = {
    name:"Jatin",  // Ye toh name hai wo hamesha js string ki tarah assume karta hai.
    "full name":"Jatin sharma",
    mySym:"mykey1",
    [mySym]:"mykey1", // If we want to use symbol in object then this is the syntax for this.
    age:18,
    location:"Budni",
    email:"jatinsharma14202003@gmail.com",
    isLoginIn: true,
    lastLoginDays:["Monday", "Friday"]

}

//console.log(JsUser.name)
//console.log(JsUser["name"]) // Ye jo name hai wo behind the scene string ki tarah track ho rha hai so hame square bracket me string ki tarah define karna padega 
//console.log(JsUser.age("full name ")) //  Gives error, we can only use square bracket
//console.log(JsUser["full name"])
//console.log(JsUser.mySym)

//console.log(typeof JsUser.mySym) // Data type is string soo here this symbol is used as string.
//console.log(JsUser[mySym])


// Changing values of object
JsUser.email = "jatinsharma@google.com"
//Object.freeze(JsUser) // This will freeze all the changes..
JsUser.email = "jatinsharma@chatgpt.com"

//console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

console.log(JsUser.greeting) // [Function (anonymous)] returns the function type
console.log(JsUser.greeting()) // Hello Js User


console.log("\n");


JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting2())


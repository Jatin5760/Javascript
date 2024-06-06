// Stack is used by Primitive data types isme ham copy me change karte hai naa ki reference me.
// Heap used hota hai non primitivd data types me jaha se ham reference se sidha data uthahenge.

let myName = "Jatin"

let anothername = myName
anothername = "Nupur"

console.log(myName) //Jatin
console.log(anothername) //Nupur


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "Jatin@google.com"

console.log(userOne.email)
console.log(userTwo.email)
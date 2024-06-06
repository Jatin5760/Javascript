// Arrow Functions

const user = {
    username: "Jatin",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to the website`); 
        // Current context ko refer karne ke liye this keyword ka use karte hai.
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this); //Here the value will be {} empty object 
// But in browser it will not show empty object {}. It will show window.
// Java script ko pehele browser me hi execute karte thee.. 
// Broswer ke andar jo global object hai wo window object hai Jiske through ham windows ke har event ko capture karpate hai...
// But hamne javascript ka engine hi nikal liya hai aur usko idle par chala rahe hai soo isley wo hamko empty object {} de raha hai.



function Chai(){
    let username = "Jatin"
    console.log(this.username); // Undefined (Context works only inside object function ke ander work nhi kar raha hai).
}
Chai()


const chai1 = function(){
    let username = "Jatin"
    console.log(this.username) //Undefined
}
chai1()


// Arrow Functions
const chai2 = () => {
    let username = "Jatin"
    console.log(this.username) //Undefined
}
chai2()


// Basic Arrow function
const addTwo = (num1, num2) =>
{
    return num1 + num2;
}
console.log(addTwo(3,4)) // 7



// Implicit return Syntax
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo(4,4)) // 8

const addTwo3 = (num1, num2) => (num1 + num2); 
// () bracket bhi use kar sakte hai () is wale bracket me ham return keyword use nhi karenge but {} isme return keyword use karna padega
console.log(addTwo(4,4)) // 8



// const myArray = [2,5,3,9]
// myArray.forEach(()=>{})
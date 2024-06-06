// If
const isUserLoggedIn = true

const temp = 40
if (temp<50){
    console.log("Temp less than 50")
} else{
    console.log("Temp greater than 50")
}


const score = 200
if(score>100){
    const power = "fly" // Yaha agar const ke jagah var use karte toh program chalta because var global scope ke saath hota hai 
    console.log(`User Power: ${power}`) 
}
// console.log(`User Power: ${power}`) // This is out of scope soo it gives us error.


const balance = 1000

// Implicit If
if(balance>500) console.log("Testing");

if(balance < 500){
    console.log("Less than")
} else if(balance < 750){
    console.log("Less than 750")
} else if(balance < 900){
    console.log("Less than 900")
} else if(balance < 1200){
    console.log("Less than 1200")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User LoggedIn")
}






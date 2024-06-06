//2 Hours 33 min


const Score = 440
console.log(Score)


const Balance = new Number(Score)
console.log(Balance) // Return a dictionary with key as Number and value as Score


console.log(Balance.toString().length) // 3
console.log(Balance.toString())  // 440


const balance1 = new Number(1000)
console.log(balance1)

console.log(balance1.toString()) // 1000 (String wala).
console.log(typeof balance1.toString()) // String.


console.log(balance1.toFixed(2)) // 100.00.

const otherNumber = 22.89667

console.log(otherNumber.toPrecision(3)) // Round off karta hai.

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')) // Comma laga deta hai indian standard ke hisab se.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Maths lib

console.log(Math)

console.log(Math.abs(-4)) // 4
console.log(Math.round(4.62)) // 5
console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.99)) // 4
console.log(Math.min(4,3,6,8)) // 3
console.log(Math.max(4,3,6,8)) // 8

// Random in Maths
console.log(Math.random()) // Randomly generates a value between 0 and 1 in floating points.
console.log(Math.floor(Math.random()*10)+1)


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
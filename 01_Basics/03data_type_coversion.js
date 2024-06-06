let Score = "33abc"

console.log(typeof(Score)) // String
console.log(typeof Score)  // String

console.log("\n")

let valueinnumber = Number(Score)
console.log(typeof valueinnumber) // Number
console.log(valueinnumber) // Nan

console.log("\n")

// "33" => 33
// "33abc" => NaN (Not A Number)
// true => 1; false =>0
// null => 0
// undefined => NaN



let isLoggedIn = 1

let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)
console.log("\n");

// 1 => true; 0 => false;
// "" => false
// "Jatin" => true

let someNumber = 21
let stringNumber = String(someNumber)
console.log(stringNumber); // 21
console.log(typeof(stringNumber)); // String

console.log("\n");
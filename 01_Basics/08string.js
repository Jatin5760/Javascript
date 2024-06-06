const name = "Jatin"
const repoCount = 50

// console.log(name + repoCount + " Value") // This is old tarika.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) 
// This is new way because of backtick we use string interpolation concept to 
//concatinate strings.



// Declaration of String
const gameName = new String(`Jatin-S`) //Here New is object keyword // This is object and iski key string hai and value Jatin-S hai 
console.log(gameName)


console.log(gameName[0])
console.log(gameName[3])
console.log(gameName.__proto__) //This is used to aceess this prototype or type of class used  

console.log(gameName.length) // String ki length bata deta hai 
console.log(gameName.toUpperCase()) //Sari string ko upper case me laa deta hai.
console.log(gameName.toLowerCase()) // Saari string ko lower case me laa deta hai.
console.log(gameName.charAt(2)) // Kis index par konsa character hai.
console.log(gameName.indexOf('n')) // Kisi bhi letter ki index bata deta hai.



// String slicing
const newString = gameName.substring(0,4 )
console.log(newString)


const anotherString = gameName.slice(-8,3)
console.log(anotherString)


const newStringOne = "    Jatin    "
console.log(newStringOne)
console.log(newStringOne.trim()) // All the white spaces are trimmed 


const url = "https://jatin.com/jatin%20sharma"

console.log(url.replace("%20", "-"))
console.log(url.includes('h')) // Check weather h is there in url or not
console.log(url.includes('jiihd'))



console.log(gameName.split("-"))
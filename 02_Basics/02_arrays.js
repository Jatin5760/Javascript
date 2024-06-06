const marvel_heros = ["Thor", "Iron-Man", "Spider-Man"]
const dc_heros = ["Super-Man", "Bat-Man", "Flash"]

// Push Method
//marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3]) 


// Concat Method
//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros)


// Spread Operator Method
//const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)


// Flating of Array
//const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)


//
//console.log(Array.isArray("Jatin")) // False (This will check weather it is array or not)
//console.log(Array.from("Jatin")) // This will convert the string to array format.
//console.log(Array.from({name: "Jatin"})) // It will be confused ki value se array banau yaa keys se. So empty array de dega.


// Number to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // [100,200,300] This will convert the values and combine them and form a array.


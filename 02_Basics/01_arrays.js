// Arrays: It is a data structure where multiple datatype of data is stored in a single variable.
//         It is a non primitive datatype.
//         It is resizable.
//         Array elements cannot be accessed through arbitary string.. It can only be accessed through index (Starts from zero)
//         Array ki shallow copy banti hai. Jo bhi change ham karte hai wo refrence me bhi change ho jata hai 


const myArr = [0, 1, 2, 3, 4, 5, true, "Jatin"] // Array Declaration
const myHeros = ["Shaktiman", "Naagraj"]
//console.log(myArr[7]) // Jatin

const myArr2 = new Array(1,2,3,4) // Array declaration
//console.log(myArr2[2]) // 3

//console.log(myArr.length) // 8


//++++++++++++++++++++++++++ Methods of Array ++++++++++++++++++++++++++++++++

// myArr.push(6) // Add 6 to the last index of Array
// console.log(myArr)

// myArr.pop() // Remove last element of Array
// console.log(myArr)

// myArr.unshift(9) // First me add kardega array ke 
// console.log(myArr)

// myArr.shift() // First wala element uda dega
// console.log(myArr)


//console.log(myArr)

// console.log(myArr.includes(9)) // False (Array doesn't include 9)

// console.log(myArr.indexOf("Jatin")) // 7


// const newArr = myArr.join() // This will convert the array to string.
// console.log(newArr)
// console.log(typeof newArr)


// Slice, Splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1,3)

console.log("C",myArr) // Splice orignal array ko hi munipulate kardeta hai 

console.log(myn2)





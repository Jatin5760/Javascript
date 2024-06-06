// For of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set(`IN`, "India")
map.set(`US`, "USA")
map.set(`FR`,"France")

//console.log(map)
// Maps are iteratable.
for (const [key, value] of map) {
    console.log(key, ":-", value)
}


// Object
const myObject = {
    'game1':'NFS',
    'game2':'SpiderMan'
}

// for (const [key,value] of myObject) {
//     console.log(key, value)
// }

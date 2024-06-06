// Reduce

const array = [1,2,3]
const total = array.reduce(function(acc, currval){
    console.log(`Acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0) // Ye comma laga ke accumulator ki value di gayi hai.

console.log(total)


console.log("\n");

const myTotal = array.reduce((acc, curr) => acc + curr,0)
console.log(myTotal)


console.log("\n");

const shoppingCart = [
    {
        itemName: "Js-Course",
        price: 299
    },

    {  
        itemName: "Python",
        price: 199
    },

    {   
        itemName: "Cpp",
        price: 499
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(priceToPay);

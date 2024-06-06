// Shopping cart.
// We will use rest operator here... Spread and rest operator ka syntax same hai.


function calculateCartPrice(...num1) // This 3 dots are rest operator.
{
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000,1938300))



function calculateCartPrice1(val1, val2, ...num1) // This 3 dots are rest operator.
{
    return num1
}

//console.log(calculateCartPrice1(200,400,500,2000,1938300)) // Here 200 goes to val1, 400 goes to val2 and rest of the numbers goes to array.




// Object and funtions
const user = {
    username:"Jatin",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)
}

//handleObject(user)

//handleObject({
//     username:"Sam",
//     price:399
//})




// Array and functions

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)) // 400
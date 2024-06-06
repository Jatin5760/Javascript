// Functions

function sayMyName(){
    console.log("Jatin")
    console.log("Sharma")
}
//sayMyName() // Calling the function.




// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(2,3)

// console.log("Result: ", result) // Undefined.... WHYYY ??

function addNum(num1,num2){
    let result = num1 + num2
    return result
}

const result1 = addNum(3,4)
//console.log("Result: ", result1)






function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in`
}

//console.log(loginUserMessage("Jatin"))
console.log(loginUserMessage()) // Undefined
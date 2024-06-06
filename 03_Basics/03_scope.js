// Scopes

let a = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", b)
}

console.log(a) // This will print global scope value not the value which is inside the if block scope.
//console.log(b)
console.log(c) // Since Var doesn't affected by scope soo it can give output but rest abouve 2 consoles can't give us output.



// Nested scope
// This is also called closure where child function can access parents variables.
function one(){
    const username = "Jatin"

    function two(){
        const website = "www.Youtube.com"
        console.log(username)
    }
    //console.log(website)

    two()
}

one()




if(true){
    const username = "Jatin"
    if(username === "Jatin"){
        const website = " Youtube"
        console.log(username+website)
    }
}




// Example
console.log(addOne(5)) // Calling the function before it's initialization.

function addOne(num){
    return num + 1;
}


//console.log(addTwo(5)) 

// This gives us error (We will learn Hosting then we will get clear this concept).
// Since the function is already stored in a variable so it will give error if we call it before its initialization

const addTwo = function(num){ // Issko kabhi kabhi expression bhi bol diya jata hai.
    return num + 2;
}
















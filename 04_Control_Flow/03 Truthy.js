const userEmail = "Ja@Jatin.ai"

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email")
}


// False values
//1) false , 0 , -0, BigInt 0n, "" , null , underfined, NaN.


// Truthy values
// "0" - true, "False" - true, " " - true, [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Nullish Coalescing Operator (??) -> Null, Undefined.
// Error Handling ke liye use hota hai mostly.

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);



// Terninary Operator
//Condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")

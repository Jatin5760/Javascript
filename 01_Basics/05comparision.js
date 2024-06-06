console.log(null == undefined) // True
console.log("2" > 1); //In cases me string ko convert karke compare karta hai javascript 
console.log("02" > 1); //True

console.log(null > 0) //False
console.log(null < 0) //False
console.log(null >= 0) //True //Ye comparision operator null ko number me convert kar deta hai isley output different hai 

console.log(undefined > 0) //False
console.log(undefined < 0) //False
console.log(undefined >= 0) //False

//comparision (<,>,>=,<=) and equality (==) operator works differently in javascript



console.log("2"===2) //False
//Because triple equality check datatype and it doesn't convert the number to another data type



//const tinder = new Object() // This is singleton object
const tinder = {} // This is non singleton object

tinder.id = "123"
tinder.name = "Jatin"
tinder.isLoggedIn = false

//console.log(tinder)


const regularUser = {
    email:"Jatin@google.com",
    fullname:{
        userfullname:{
            firstname:"Jatin",
            lastname:"Sharma"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//const obj3 = {obj1,obj2}
//console.log(obj3)

//const obj4 = Object.assign({},obj1,obj2,obj3) // Here this empty{} works as target and rest (obj1,obj2,obj3) are considered as sources.

const obj4 = {...obj1, ...obj2, ...obj3} // Spread Operator method
//console.log(obj4)


// Database se jab value atti hai 
// Ye hai Array ka object
// Isme array ke andar bahot sarre objects hai.
const users = [
    {
        id:1,
        email:"J@gmail.com"
    },

    {

    },
    {

    }
]


users[1].email


console.log(tinder)
console.log(Object.keys(tinder)) // Sarri Keys ko array me daal dega 
console.log(Object.values(tinder)) // Values de dega array me
console.log(Object.entries(tinder)) // Sarri entries ko array me daal dega jisme value aur key dono honge 

console.log(tinder.hasOwnProperty('isLoggedIn')) // True
console.log(tinder.hasOwnProperty('isLogged')) // False












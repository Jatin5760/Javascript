const accountId = 14
let accountEmail = "jatin@google.com"
var accountPassword = "12345"
accountCity="Budni"
let accountState;


//accountId = 2 // This is not allowed we cant change Constant value because it is fixed
console.log(accountId)


/*Prefer not to use var 
because of issue in block and functional scope */


accountEmail="jatin@js.com"
accountPassword="Jatin@123"
accountCity="Bhopal"

console.table([accountEmail,accountPassword,accountId,accountCity,accountState])
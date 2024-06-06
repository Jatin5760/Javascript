// Javascript execution context - Apne jo bhi file banai hai JS usko kese run karti hai.. Uska matlab hota hai ye (JEC).
// Javascript 2 phase me context execution karti hai.

// Jab bhi javascript ko ham apni code file dete hai toh Global execution context banta hai.
// Aur isko this varible se refer kiya jata hai.
// Browser ka Global execution context window hota hai jabki Nodejs ka global execution context alg rehta hai.
// Sabka alg alg Global execution context hota hai.

// 1) GLOBAL EXECUTION CONTEXT
// 2) FUNCTION EXECUTION CONTEXT
// 3) EVAL EXECUTION CONTEXT




// How  Java Script Runs
// *** Step 0 - Creation of Global execution context.. which is allocated in (this) keyword.
// *** Step 1 - Memory Creation Phase.
// Sarre variable ko initialize karke rakha jata hai and unke andar undefined hota hai.
//
//
// Val1 -> Undefined                                     let Val1 = 10
// Val2 -> Undefined                                     let Val2 = 5
// addNum -> Defination                                  function addNum(num1,num2){
//                                                                 let total = num1+ num2;
//                                                                 return total
//                                                            }
//                                                        let result1 = addNum(Val1, Val2)
//                                                        let result2 = addNum(10,2)
// Result1 -> Undefined
// Result2 -> Undefined

// Step 2 - Execution Phase.
// Val1 <- 10
// Val2 <- 5
// addNumber ke andar kuch nhi hoga because uski defination already hold karke rakhi hai.
// Jaise hi program result1 wali line me ayega wo addNum function ko wapas call karega.
// Jab  addNum apna alg ek execution context banyega
// Uss execution context box me ek new variable environt aur ek execution thread banega.
// Ab hamare pass ek new sandbox tayar hogya hai soo wapas se purane jo 2 phase the wo wapas execute honge.(memeory phase and execution phase).
// Ye sab hone ke baad Execution context declare hua tha wo delete ho jayega.
// Ab result1 = 15


// (Phase-2)                                    (Phase-3)
// Memory Phase                                Execution Context
// Val1  -> Undefined                          num1 -> 10
// Val2  -> Undefined                          num2 -> 5
// Total -> Undefined                          total -> 15


// Step 3 -  
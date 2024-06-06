// Immediately Invoked Function Expression (IIFE)
// Kabhi kabhi global scope ke pollution se problem hoti hai bahot baar toh us pollution ko hatane ke liye ham IIFE use karte hai 

(function chai(){
    // named IIFI
    console.log(`DB CONNECTED`)
})(); // This semicolon will stop the context. So our arrow function can run.


// IIFE through arrow function
((name) => {
    // Un-Named IIFI With parameter.
    console.log(`DB CONNECTED2 ${name}`);
    }
)("Jatin") 

// ()() First bracket me function ki defination likhna hai and second bracket se function call hoga.






















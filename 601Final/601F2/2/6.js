function outerFunction() {
    var outerVariable = 'I am from the outer scope'; // Variable from the outer function

    // Define an inner function that accesses a variable from the outer function
    function innerFunction() {
        console.log(outerVariable); // Accessing the outer variable
    }

    return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // Get the inner function, which has a closure over 'outerVariable'

// Although 'outerFunction' has completed execution, 'closureFunction' still has access to 'outerVariable'
closureFunction(); // Outputs: "I am from the outer scope"

// Modifying the outerVariable before calling closureFunction to demonstrate closure property
function anotherOuterFunction() {
    var count = 0; // A new variable within a different outer function

    function increment() {
        count++; // The closure remembers 'count' variable
        console.log('Current count:', count); // Accessing the outer variable
    }

    return increment; // Returning the function with closure
}

const counter = anotherOuterFunction(); // Get the inner function with a closure over 'count'

// Each call to 'counter' remembers the state of 'count' within its closure
counter(); // Outputs: "Current count: 1"
counter(); // Outputs: "Current count: 2"
counter(); // Outputs: "Current count: 3"

// Creating a new instance of the closure
const anotherCounter = anotherOuterFunction(); // This creates a new scope, a new 'count'
anotherCounter(); // Outputs: "Current count: 1" (independent of the first 'counter' instance)

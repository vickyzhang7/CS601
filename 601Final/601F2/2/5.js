// Example 1: Variable hoisting
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// Explanation: Even though the variable x is declared and initialized later in the code,
// the console.log statement does not throw an error. This is because variable declarations
// are hoisted to the top of their scope during the compilation phase. However, the value
// assignment remains in place, so when the first console.log statement is executed,
// the variable x exists but has the value undefined.

// Example 2: Function hoisting
sayHello(); // Output: "Hello, World!"

function sayHello() {
    console.log("Hello, World!");
}

// Explanation: Similar to variable declarations, function declarations are hoisted to the
// top of their scope during the compilation phase. Therefore, even though the function
// sayHello() is called before its declaration, it still executes without throwing an error.


//example3
console.log("Value of x before declaration:", x); // undefined
var x = 10;
console.log("Value of x after declaration:", x); // 10

// Hoisting with a function
hoistedFunction(); // "Hoisted function executed!"

function hoistedFunction() {
    console.log("Hoisted function executed!");
}

// Below is a demonstration of hoisting with function expressions
try {
    nonHoistedFunction(); // This will throw an error
} catch (error) {
    console.log("Error:", error.message); // "nonHoistedFunction is not a function"
}

var nonHoistedFunction = function() {
    console.log("This function expression is not hoisted.");
};



//////
// Example 1: Variable hoisting

console.log(x); // Outputs: undefined (x is declared but not yet initialized)
var x = 10; // Initialization happens here
console.log(x); // Outputs: 10 (x is now initialized)

// What's happening:
   // 1. The declaration `var x` is hoisted to the top of the scope.
   // 2. The initialization `x = 10` stays in its original place.
   // 3. So, when you try to log `x` before initialization, it's declared but `undefined`.


// Example 2: Function hoisting

console.log(hoistedFunction()); // Outputs: "I'm hoisted!" (function declaration is hoisted)

function hoistedFunction() {
  return "I'm hoisted!";
}

// Example 3: Function expression (not hoisted)

try {
  console.log(nonHoistedFunction()); // Throws an error: "TypeError: nonHoistedFunction is not a function"
} catch (e) {
  console.error(e.message); // This will log the error message
}

var nonHoistedFunction = function() {
  return "I'm not hoisted!";
};

// What's happening:
   // 1. Function declarations are hoisted, so `hoistedFunction` is defined at the top.
   // 2. Function expressions are not hoisted, so `nonHoistedFunction` is undefined at the point of the console.log, resulting in an error.

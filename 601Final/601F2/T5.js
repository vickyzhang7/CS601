// Example 1: Variable declaration is hoisted, but not initialization
console.log(myVar); // undefined
var myVar = 10; // Variable declaration is hoisted to the top, but initialization remains in place

// Equivalent to:
// var myVar;
// console.log(myVar);
// myVar = 10;

// Example 2: Function declaration is fully hoisted
console.log(add(5, 2)); // 7
function add(a, b) {
    return a + b;
}

// Equivalent to:
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 2));

// Example 3: Variable and function declarations are hoisted, function takes precedence
console.log(myFunc()); // "Function hoisting"
console.log(myVar); // undefined
var myVar = "Variable hoisting";
function myFunc() {
    return "Function hoisting";
}

// Equivalent to:
// function myFunc() {
//     return "Function hoisting";
// }
// var myVar;
// console.log(myFunc());
// console.log(myVar);
// myVar = "Variable hoisting";



// Example 4: Function Hoisting
sayHello(); // Output: "Hello, world!"

function sayHello() {
    console.log("Hello, world!");
}

// Explanation:
// The function sayHello is declared and defined. 
// Similar to variable declarations, function declarations are hoisted to the top of their scope during compilation.
// Therefore, even though the function call appears before the function declaration, it executes without throwing an error.

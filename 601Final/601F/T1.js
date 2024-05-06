// In JavaScript, you can use a Set object to store unique values of any type, 
// including strings. Here's how you can save string values into a Set object:

// Create a new Set object
let stringSet = new Set();

// Add string values to the set
stringSet.add("apple");
stringSet.add("banana");
stringSet.add("orange");

// You can also add multiple values at once using an array
stringSet.add("grape");
stringSet.add("kiwi");

// Adding duplicate values won't have any effect as Set only stores unique values
stringSet.add("apple");
stringSet.add("banana");

// You can also initialize a Set with an array of values
// For example:
// let stringSet = new Set(["apple", "banana", "orange"]);

// Now stringSet contains unique string values
console.log(stringSet); // Output: Set { 'apple', 'banana', 'orange', 'grape', 'kiwi' }





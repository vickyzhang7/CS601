// Function to sum any number of numeric values
function sumValues(...values) {
    let sum = 0; // Variable to keep track of the sum

    // Iterate over the provided values and add them to the sum
    for (const value of values) {
        if (typeof value === 'number') {
            sum += value; // Add only if it's a numeric value
        } else {
            throw new Error("All arguments must be numeric."); // Handle non-numeric inputs
        }
    }

    return sum; // Return the calculated sum
}

// Example usage
try {
    console.log(sumValues(1, 2, 3, 4)); // Outputs: 10
    console.log(sumValues(10, 20, 30, 40)); // Outputs: 100
    console.log(sumValues(5.5, 3.2, 4.8)); // Outputs: 13.5
} catch (e) {
    console.error(e.message);
}

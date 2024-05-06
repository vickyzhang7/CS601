// Function to simulate an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful data retrieval
            const data = ['apple', 'banana', 'orange'];
            resolve(data);
        }, 2000);
    });
}

// Call fetchData function
fetchData()
    .then(data => {
        // Log data to console
        console.log('Data retrieved:', data);
        // Display data in the HTML
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = `Data retrieved: ${data.join(', ')}`;
    })
    .catch(error => {
        // Log error to console
        console.error('Error fetching data:', error);
        // Display error in the HTML
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = `Error fetching data: ${error.message}`;
    });

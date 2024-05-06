// npm install axios


// Import Axios
const axios = require('axios');

// Make a GET request to the URL
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle the data here
    console.log(response.data); // Display all the data in the console
    // You can do further processing here, such as displaying the data on the webpage
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

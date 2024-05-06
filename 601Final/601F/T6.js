fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Display all the data in the console
    // You can do further processing here, such as displaying the data on the webpage
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

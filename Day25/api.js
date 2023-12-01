// **Challenge 25**  
// Description:  
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.  
// Use any random API that you want  
// Solution Approach:  
// Utilize the .then method to chain promises.

function fetchDataFromAPI(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => resolve(data))  
      .catch(error => reject(error));
  });
}

function getData() {
  const apiUrl1 = 'https://jsonplaceholder.typicode.com/users/1';
  const apiUrl2 = 'https://jsonplaceholder.typicode.com/users/2';

  return fetchDataFromAPI(apiUrl1)
    .then(data1 => {
      return fetchDataFromAPI(apiUrl2)
        .then(data2 => {
          const combinedResult = {
            data1: data1,
            data2: data2
          };
          return combinedResult;
        });
    });
}

// Example usage
getData()
  .then(combinedResult => {
    console.log('Combined Result:', combinedResult);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  
// **Challenge 21**  
// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.  
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.  
// Solution Approach: Use async/await within a for...of loop.
async function asyncLoop(array, asyncFunction) {
    for (const element of array) {
      await asyncFunction(element);
    }
  }
async function asyncOperation(element) {
    return new Promise(resolve => {
    setTimeout(() => {
        console.log("Processing ", `${element}`);
        resolve();
      }, 1000); 
    });
  }
  const myArray = [1, 2, 3, 4, 5];
  asyncLoop(myArray, asyncOperation);
  
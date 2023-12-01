// **Challenge 26**
// Description:
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
// Solution Approach:
// Combine map, filter, and reduce array methods.

function calculateTotal(numbers) {
    const filteredNumbers = numbers.filter(number => number % 2 !== 0);
    const squaredNumbers = filteredNumbers.map(number => number ** 2);
    const total = squaredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = calculateTotal(numbers);
  console.log(result); 
  
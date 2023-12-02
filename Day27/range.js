// **Challenge 27**  
// Description:  
// Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.  
// Solution Approach:  
// Use the function\* syntax for generator functions and the yield keyword.  
// @everyone

function* rangeGenerator(start, end) {
    for (let current = start; current <= end; current++) {
        yield current;
    }
}
const startValue = 1;
const endValue = 7;

const generator = rangeGenerator(startValue, endValue);
for (const num of generator) {
    console.log(num);
}


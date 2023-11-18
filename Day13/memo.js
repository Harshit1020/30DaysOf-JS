// **Challenge 13**
// Problem Statement: Implement a memoization function.

// Description: Write a function that takes 
// a function as its argument and returns 
// a memoized version of the function.

// Solution Approach: Store the 
// function's results for previous inputs 
// and return the stored result for repeated inputs.

function memoize(fn){
    const cache = {}
    return function(...args){
        const cachekey = JSON.stringify(args);
        if(cache[cachekey] === undefined){
            cache[cachekey] = fn(...args);
        }

        return cache[cachekey];
    };
}

const originalFibonnaci = (n)=>{
    if(n == 0 || n == 1){
        return n;
    }
    return originalFibonnaci(n-1) + originalFibonnaci(n-2);
}

const memorizedFibonacci = memoize(originalFibonnaci);
console.log(memorizedFibonacci(5))
console.log(memorizedFibonacci(10))


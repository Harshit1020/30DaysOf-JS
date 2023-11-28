// **Challenge 23**
// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
// Solution Approach:
// Utilize closure to maintain the state of the counter.

function counter(){
    let cnt = 0;
    return function(){
        cnt += 1;
        return cnt;
    }
}
let cnt = counter();
console.log(cnt())
console.log(cnt())
console.log(cnt())
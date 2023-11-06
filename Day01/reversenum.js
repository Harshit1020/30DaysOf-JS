// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223
function reversenum(num){
    let revnum = 0;
    while(num != 0){
        let rem = num % 10;
        revnum = revnum * 10 + rem;
        num = Math.floor(num/10); 
    }
    return revnum;
}
console.log(reversenum(32243))
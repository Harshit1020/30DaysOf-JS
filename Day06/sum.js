// **Challenge 6**  
// Write a JavaScript program to compute the sum of 
// the two given integers. If the two values are 
//  same, then return triple their sum.
function sum(a,b){
    if(a == b) return 3*(a+b)
    return a+b;
}
let a = 7;
let b = 7
console.log(sum(7,7))
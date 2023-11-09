// ## Challenge 4: 
// Write a JavaScript program to 
// find the area of 
// a triangle where three sides are 5, 6, 7.
function triangle(s1,s2,s3){
    if((s1+s2 <= s3) || (s1+s3 <= s2) ||(s2+s3 <= s1)){
        return 'Not a triangle'
    }
    let s = (s1 + s2 + s3)/2;
    let ans = Math.sqrt((s *(s - s1) * (s - s2) * (s - s3)));
    return ans;
}
let s1 = 5;
let s2 = 6;
let s3 = 7
console.log(triangle(s1,s2,s3))
// ## Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function uppercase(str){
    let words = str.split(" ");
    let str2 = ""
    for(let i = 0; i<words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        str2 += words[i];
        str2 += " ";
    }
    return str2;
}
console.log(uppercase("the quick brown fox"))
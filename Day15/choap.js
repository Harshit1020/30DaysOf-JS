// **Challenge 15**
// Problem Description -
// create a string_chop function 
// that takes a string and 
// chop factor(size) and 
// chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']

const string_chop = (str , n = str.length)=>{
    const res = []
    for(let i = 0; i<str.length; i+=n){
        res.push(str.slice(i , i+n));
    }
    return res;
}

console.log(string_chop("Scaler"))
console.log(string_chop("Scaler",2))
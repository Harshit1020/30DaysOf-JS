// ## Challenge 3:
// Write a JavaScript program to check 
// whether two given integer values are in 
// the range 50..99 (inclusive). 
// Return true if either of them falls within the range.

function chekkar(a,b){
    if((a >= 50 && a <= 99) || (b >= 50 && b <=99)){
        return true;
    }else{
      return false;
    }
}
console.log(chekkar(20,105))
console.log(chekkar(55, 85))
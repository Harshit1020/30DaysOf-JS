// **Challenge 8**  
//  Write a JavaScript function to get 
//  all possible subsets with a 
//  fixed length (for example 2) combinations in an array.  
// Sample array : \[1, 2, 3\] and subset length is 2  
// Expected output : \[\[2, 1\], \[3, 1\], \[3, 2\], \[3, 2, 1\]\]

function getSubset(arr , len){
    const result = [];
    function generateSubset(currentsubset , start){
        if(currentsubset.length == len){
            result.push(currentsubset.slice());
            return;
        }
        for(let i = start; i<arr.length; i++){
            currentsubset.push(arr[i]);
            generateSubset(currentsubset , i+1);
            currentsubset.pop();
        }
    }
    generateSubset([], 0);
    return result;
}
const example = [1,2,3];
const subsetlen = 2;
console.log(getSubset(example, subsetlen));


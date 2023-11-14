// **Challenge 9**  
// Write a JavaScript function to find the first not repeated character.  
// Sample arguments : 'abacddbec'  
// Expected output : 'e'
function findUnique(s){
    let hMap = new Map();
    for(let i of s){
        if(!hMap.has(i)){
            hMap.set(i, 0);
        }
        hMap.set(i, hMap.get(i) + 1);
    }
    for(let i of s){
        if(hMap.get(i) == 1){
            return i;
        }
    }

    return null;
}

let str = 'abacddbec';
console.log("first not repeated character", findUnique(str));
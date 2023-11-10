// ## Challenge 5: 
// Write a JavaScript exercise to get the filename extension.


function getFileExtention(filename){

    return filename.split('.').pop();
}

let filename = 'new.java'
let extension = getFileExtention(filename);
console.log("File Extention : ",extension)

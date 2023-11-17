// Challenge 12
// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
//  "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


function displyTime(){

    let now = new Date();
    let hour = now.getHours().toString().padStart(2,"0");
    let minute = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");
    console.log(`${hour} : ${minute} : ${seconds}`);    
}
setInterval(displyTime , 1000);


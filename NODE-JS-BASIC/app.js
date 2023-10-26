// console.log("Hello from Node Js");
const readline = require("readline");
const fs = require("fs");
const path = require('path');


/*  LECTURE 04 **************************
READ WRITE FROM TERMINAL
*****************************************
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please Enter Your Name: ", (name)=> {
    console.log("You Entered: " + name);
    rl.close();  //close event
})

// Listen to the event

rl.on('close' , () => {
    console.log("Interface Closed");
    process.exit(0);
}) */


/* 
LECTURE 05
READ WRITE TO A FILE (FILE SYSTEM)
***************************
*/

// let textIn = fs.readFileSync('Files/input.txt', 'utf-8');
// console.log(textIn);
// let content = `Data read from input.txt : ${data} \nDate Created ${new Date()}`
// fs.writeFileSync('./Files/output.txt',content);

const filePath = path.join(__dirname, 'Files/input.txt');
const outputPath = path.join(__dirname, 'Files/output.txt');

if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);

        let content = `Data read from input.txt : ${data} \nDate Created ${new Date()}`;
        fs.writeFileSync(outputPath, content);
        console.log('Data written to output.txt');
    });
} else {
    console.error('File not found:', filePath);
}




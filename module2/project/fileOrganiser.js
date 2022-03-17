//take input in node.js
// let inputArr = process.argv[2];
// console.log(inputArr);

// let inputArr = process.argv;
// let input = inputArr[3];
// console.log(input);
let fs = require("fs");
let folderpath = process.argv[2]; //C:\Users\abhin\OneDrive\Desktop\FJP6(1)\module2\project\download
// console.log(folderpath);

let folderExists = fs.existsSync(folderpath);

if(folderExists){
    let files = fs.readdirSync(folderpath);
    console.group(files);
} else{
    console.log("Please Enter a valid path");
}



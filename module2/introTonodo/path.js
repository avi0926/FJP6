// "C:\Users\abhin\Downloads\FJP6(1)\module2\introTonodo\path.js"

let path = require("path");
// console.log(path);

let extensionName = path.extname("C:\Users\abhin\Downloads\FJP6(1)\FJP6-main\FJP6-main\index.html");
console.log(extensionName);

// let baseName = path.basename("C:\Users\abhin\Downloads\FJP6(1)\module1\css_selector_questions\q1.html");
let baseName = path.basename(__filename);
// console.log(baseName);

console.log(__dirname); //directory path

console.log(__filename); //file path

let dirPath = __dirname;
console.log(dirPath);
let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);


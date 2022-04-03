//copy index.html file from module1 move to a new folder inside module2 having name html.
let fs = require("fs");

let path = require("path");

//..means step back
console.log(__dirname);
let srcpath = path.join(__dirname,"..","..","..","module1","index.html");
console.log(srcpath);

let destpath = path.join(__dirname,"..","..","index.html");
console.log(destpath);


fs.copyFileSync(srcpath,destpath);
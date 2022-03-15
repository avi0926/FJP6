//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");

let path = require("path");

//..means step back

let srcpath = path.join(__dirname,"..","..","..","module4","index.html");
console.log(srcpath);

let destpath = path.join(__dirname,"..","..","index.html");
console.log(destpath);


fs.copyFileSync(srcpath,destpath);
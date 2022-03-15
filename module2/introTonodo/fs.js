let fs = require("fs");
// console.log(fs)

let path = require("path");
// console.log(path);/

// let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);


// // // C R U D-----------------

// // C-creat
// fs.writeFileSync(filePath,"Again writing on existing file");


// // // R-read
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// // // U-update
// fs.appendFileSync(filePath," newly added content");
// console.log("After update : ");
// console.log(fs.readFileSync(filePath,'utf-8'));

// // // D-delete
// fs.unlinkSync(filePath);


//---------------------------------------------------------------------------

//create a directory
// if does not exist
// if(!fs.existsSync("meridirectory")){
//     fs.mkdirSync("Meridirectory");
// }

//read a directory

//if \ does not work then use \\ slash
// let folderpath  = "C:\\Users\\abhin\\Downloads\\FJP6(1)\\module1";
// let folderpath = "C:\\Users\\abhin\\Downloads\\FJP6(1)\\module2";
// let folderpath = __dirname;

// let contentofFolder = fs.readdirSync(folderpath);
// console.log(contentofFolder);

//delete/remove a directory
// fs.unlinkSync("Meridirectory"); //it is only to delete a file
// fs.rmdirSync("Meridirectory"); 

//copy a file
let sourcePath = path.join(__dirname,"file.txt");
let destinationPath = path.join(__dirname,"module","file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);

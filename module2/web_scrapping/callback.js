const fs = require('fs');

console.log("Before ");

let content = fs.readFile("file.txt",cb);

function cb(error,data){
    if(error)
        console.log(error);
    else
        console.log(data+"");
}

console.log("After");


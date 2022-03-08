let cp = require('child_process');
console.log(cp);

//open calculator with the help of this file

//for windows use calc
cp.execFileSync("calc");

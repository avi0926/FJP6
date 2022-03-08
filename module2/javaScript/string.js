let str = "I am a String";
console.log(str);

//length of string
let len = str.length;
console.log(len);

//sliced method(work like a substring)
let slicedarr = str.slice(2,9);
console.log(slicedarr);

//replaced method
let replacedarr = str.replace("am","was");
console.log(replacedarr)
console.log(str); //original string doesn't change

//upper case
let upperCase = str.toUpperCase();
console.log(upperCase)

//lower case
let lowerCase = str.toLowerCase();
console.log(lowerCase);

//concate
let fname = "Abhinandan";
let lname = " Maurya";
// let fullname = fname.concat(lname);
let fullname = fname+lname;
console.log(fullname);

//return character
console.log(str.charAt(0));

//split method(return arr)
let splitted = str.split(" ");
console.log(splitted);


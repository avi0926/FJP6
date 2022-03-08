//empty array
let arr = [];
console.log(arr);

// array with elements
let elearr = [1,2,3,4, "Hello i am string", false, 'c', 4,5];
console.log(elearr);

console.log("element at 4th index: " + elearr[4]);
console.log("element at 0th index: " + elearr[0]);

elearr[4] = "nothing";
elearr[3] = "nothing bro";

console.log(elearr);

console.log("##########################");
//array method

//1. push
console.log("array before push: "+ elearr);
elearr.push("new item");
console.log("Array after push : "+elearr);
elearr.push("new item again");
console.log("Array after push : "+elearr);
console.log(elearr);
console.log(elearr);
console.log(elearr);

//2. pop
console.log("Array before pop: "+elearr);
elearr.pop();
console.log("Array after pop: "+elearr);

//3. shift(remove element from start)
console.log("Array before shift");
elearr.shift();
console.log("Array after shift: "+elearr);

//4. unshift(add element in start of array)
console.log("Array before unshift");
elearr.unshift(1);
console.log("Array after unshift: "+elearr);

//Finding length of an array
let len = elearr.length;
console.log(len);
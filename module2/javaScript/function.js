//function in js without parameter and without return type
function sayHello(){
    console.log("Hello from function");
}

sayHello();

//function with parameter

function sum(num1, num2){
    let addition = num1+num2;
    console.log("addition of given numbers: "+ addition);
}

sum(5,10);

//unction with return type

function mul(num1,num2){
    return num1*num2;
}

let ans = mul(3,5);
console.log('multiply of two number'+ ans);

//storing function in a variable
//functions are first class citizen in js -> (interview) because variable mai store ho skti hai
let var1 = function sub(num1,num2){
    return num1-num2;
}
console.log(var1(5,2));

// IIFE -> immediately invoked function expression
(function(){
    console.log("Hello from IIFE")
})();

//IIFE with parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5);

(function(num1,num2){
    console.log(num1*num2);
})(6,7);
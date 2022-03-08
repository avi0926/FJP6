// console.log("Swagat hai aap sabhi logo ka");
// console.log("Pepcoers");

// let a = 10; //number
// console.log(a);

// let char  = 'a'; //char
// console.log(char);

// let str = 'I am a string'; //string
// console.log(str);

// let bool = true; //boolean
// console.log(bool);

//loops -> 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for(let i=1;i<5;i++){
//     console.log(i);
// }

// let count = 10;
// while(count>0){
//     console.log(count);
//     count--;
// }

let num = 190;

let flag = 1;
for(let i=2;i*i<num;i++){
    if(num%i == 0){
        flag = 0;
        break;
    }
}
if(flag == 1){
    console.log('prime');
} else{
    console.log('not prime');
}
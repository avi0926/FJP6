//empty obect
let obj = {};
console.log(obj);

let objavi = {
    "Name": "Avi",
    "Age": '23',
    "phone No": 7985727157,
    // key by-default string hi rhegi
    lastName: 'Maurya'
};

console.log(objavi);

let capAmerica = {
    Name: 'Steve',
    Age: 999,
    Friends: ['Natasha', 'Thor', 'Tony', 'Bucky', 'Bruce'],
    address: {
        city: "Brooklyn",
        state: "New York"
    },
    sayHi: function(){
        console.log("Hey Marvel !!!");
    }
}

//whole objects
console.log(capAmerica);


console.log(capAmerica.Name);
console.log(capAmerica.Age);
console.log(capAmerica.Friends[4]);
console.log(capAmerica.address);
console.log(capAmerica.address.city);
console.log(capAmerica.sayHi());
// capAmerica.sayHi();
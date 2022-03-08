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
    isAvenger: false,
    sayHi: function(){
        console.log("Hey Marvel !!!");
    },
    saybye: function(){
        console.log("Bye Marvel !!!");
    }
}

//whole objects
console.log(capAmerica);


console.log(capAmerica.Name);
console.log(capAmerica.Age);
console.log(capAmerica.Friends[4]);
console.log(capAmerica.address);
console.log(capAmerica.address.city);
capAmerica.sayHi();
capAmerica.saybye();

console.log("object before update : ",capAmerica);
//add a new key to objects
capAmerica.Movies = ['Avenger', 'Civil War', 'Endgame'];
console.log("object after update : ",capAmerica);

//delete a key
delete capAmerica.Movies;
console.log(capAmerica);

capAmerica.isAvenger = true;
capAmerica.address.state = 'GOA';
console.log(capAmerica);


//second method to access a key

console.log(capAmerica.Name); // . ke baad by default string consider kr lega
console.log(capAmerica['Name']); // yha btana pdta hai ki ye string hai
console.log(capAmerica['Friends'][0]);
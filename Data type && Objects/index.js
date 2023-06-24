// -------------- Q.1 --------------
// A

let A = {}

// B

let A1 = {
    firstname: "Kaushal ",
    lastname: "Damani",
    age: " 20"
}

console.log(A1.firstname + A1.lastname + A1.age + A1.carname);

// C 

let A2 = {
    firstname: "Kaushal ",
    lastname: "Damani",
    age: " 20"
}

A2.carname = " BMW"
console.log(A1.firstname + A1.lastname + A1.age + A1.carname);


// D 

let A3 = {
    firstname: "Kaushal ",
    lastname: "Damani",
    age: " 20",
    carname: " BMW"
}

A3.carname = " BMW M4"

console.log(A3.firstname + A3.lastname + A3.age + A3.carname);

// E

let A4 = {
    firstname: "Kaushal ",
    lastname: "Damani",
    age: " 20",
    carname: " BMW"
}

delete A4.carname

console.log(A4.firstname + A4.lastname + A4.age + A4.carname);

// -------------- Q.2 --------------


let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let
shoppingCart = fruits;
shoppingCart.push("Banana"); // what's in fruits?
console.log(fruits.length);

// -------------- Q.3 --------------

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =users.map(item => item.name)

console.log(names);


// -------------- Q.4 --------------

usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 },
  ];
  
  console.log(usersMapped[0]);
  console.log(usersMapped[0].fullName);

// -------------- Q.5 --------------  

let salaries = {
    "Kaushal": 10000,
    "Jay": 30000,
    "Jamiesh": 250000
    };
    
    function sumSalaries(){
         let sum = 0 ;
         for(let salary of Object.values(salaries)){
            sum = sum + salary
         }
         return sum;
    }
    console.log(sumSalaries(salaries));

// -------------- Q.6 --------------  


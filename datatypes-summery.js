//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//premetive data type call by value hota hai.
 //ye copy kar ke diya jata hai original se. aur jo bhi changes hota hai wo copy me hota hai.

 //**javascript me language ko define nahi kiya jata hai.
 //** javascript static aur dynamic type hai find.
 //so javascript is a Dynamic types..

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Alpha", "Bravoo", "Charli"];
let myObj = {
    name: "Bravoo",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Friends");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

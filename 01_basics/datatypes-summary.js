// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100; // Number
const scoreValue = '100'; // String
const isloggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123');

console.log(id === anotherId); // flase


const bignumber = 1234567890123456789012345678901234567890n; // BigInt


//Reference (non-primitive)

// Array, Object, Function

const heros = ['shaktiman', 'naagraj', 'doga']; // Array

const myObj = {
    name: 'Ravi',
    age: 22,

}

// https://262.ecma-international.org/5.1/#sec-13.2

// +++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myYouTubename = "tejashamanedotcom";
let anothername = myYouTubename;

anothername = "codewithtejashamanedotcom";

console.log(anothername);
console.log(myYouTubename);

let userOne = {
    email: "user@google.com"
    upi:"user@upi"

}

let userTwo = userOne

userTwo.email = "tejas@google.com"

console.log(userOne.email);
console.log(userTwo.email);
console
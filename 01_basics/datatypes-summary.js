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

function greet
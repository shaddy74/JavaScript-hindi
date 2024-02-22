//  Primitive data type's

//  this is 7 types of

//  String, Number, Boolean, null, undefined, Sumbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1563454317876865416n


//  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "shadab",
    age: 19,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);
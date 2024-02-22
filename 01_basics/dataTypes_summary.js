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


//  ****************** Memories In JS ***************************

// Stack (primitive), Heap (Non-primitive)

let myYoutubename = "motivational speaker"

let anotherName = myYoutubename
anotherName = "shaddy developer"

console.log(anotherName);
console.log(myYoutubename)


let userOne = {
    email : "user@google.com",
    upi: "use@ybl",
}

let userTwo = userOne

userTwo.email = "sadab@google.com"
console.log(userTwo.email)
console.log(userOne.email)
// if statement

// const isUserloggedIn = true
// const temperature = 31

// if(temperature === 30){
//     console.log("less than...");
// } else{
    
//     console.log("temperature is greater than 30");
// }

// console.log("Execute");

// <, >, <=, >= ==, !=, ===, !==



// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`userpower: ${power}`);
// }
// console.log(`userpower: ${power}`);



// const balance = 1000
// if (balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User LoggedIn")
}

// Nillish Coalesing Operator (??): null undefined,

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
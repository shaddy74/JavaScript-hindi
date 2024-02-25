//  singleton
//  object.create

//  object literals

const mySym = Symbol("Keydata")


const JsUser = {
    name: "sadab",
    "full name": "Sadab Alam",
    [mySym]: "myKey1",  // print symbol
    age: 16,
    lacation: "patna",
    email: "sadab2001@gmail.com",
    isLoggedIn: false,
    isLoggedDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])


JsUser.email = "shaddy748@gmail.com"
//Object.freeze(JsUser) // to Lock JsUser don't change of any
JsUser.email = "patnahd@gmail.com"
// console.log(JsUser);



JsUser.greeting = function() {
    console.log("hello JS User");
}
JsUser.greetingtwo = function() {
    console.log(`hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo())
const user = {
    username : "sadab",
    price : 999,

    welcomeMassage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

//console.log(this);


// function chai(){
//     let username = "sadab"
//     console.log(this);   // not use (this) in function
// } 
// chai()


const chai = () => {
    let username = "sadab"
    console.log(this);  
}

// chai()


// *****Arrow Function *****

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "shadab"})

console.log(addTwo(5,8))




function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("B");
}

//sayMyName()


function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
addTwoNumbers(3 ,9)


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
//console.log("result: ", result);


function loginUserMassage(username){
    return `${username} just logged in`
}

console.log(loginUserMassage("sadab"))
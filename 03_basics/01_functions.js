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
    if(username === undefined){
        console.log("Pleanse enter username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMassage("sadab"))
//console.log(loginUserMassage(""))



function calculateCartPrice (...num1) {
    return num1
}
//console.log(calculateCartPrice(200,400,500,100,500))


const user = {
    username: "shaddy",
    price: 199
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price: 1999
})



const myNewArray = [200, 400, 100, 600]
function returnSecondeValue(getArray){
    return getArray[2]
}
console.log(returnSecondeValue(myNewArray));
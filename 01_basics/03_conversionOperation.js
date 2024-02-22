//*************************  Conversions  ********************************

let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" => easily convert to 33
//"33abc" => convert to NaN(Not a Number)
//"true" => 1;
//"false" => 0


let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


//1 => true; 0 => false
//"" => false
//"shadab" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//*************************  Operations  ********************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);


let str1 = "hello"
let str2 = " bhai"
let str3 = str1 + str2
console.log(str3);


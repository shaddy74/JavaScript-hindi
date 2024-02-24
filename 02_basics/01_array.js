// array

const myArr1 = [0,1,2,3,4,5,true,"shadab"]
const myArr2 = new Array(1,5,8,6,8,9,) 
// console.log(myArr1[6])
// console.log(myArr2)


// Array methods

// myArr1.push(7,8)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()




// console.log(myArr1.includes(5));    //bolean 
// console.log(myArr1.indexOf(true));

const newArr = myArr1.join()
// console.log(newArr);    //String
// console.log(myArr1);


// slice, splice

console.log("A", myArr1);

const myn1 = myArr1.slice(1,3)  // slice return a piece of the array but it doesn't affect the origional array.
console.log(myn1);
console.log("B",myArr1)


const myn2 = myArr1.splice(1,3)  /* splice changes the origional array by removing, replacing or adding
value and returns the affected values. */
console.log("C",myArr1);
console.log(myn2);
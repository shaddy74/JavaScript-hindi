// for

for (let number = 0; number < 10; number++) {
    const element = number;
    if (element == 7){
        // console.log("7 is Lucky number");
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Inner loop ${i}`);
        
        // console.log(i + '*' + j + ' = ' + i*j)
    }
    
}




let myArray = ["shadab", "shaddy", "sad"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
//  console.log(element);   
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue
    }

    console.log(`value of i is ${index}`)
    
}
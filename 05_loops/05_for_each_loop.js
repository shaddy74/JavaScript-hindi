// for each loop


const coding = ["ruby", "python", "java", "cpp", "JS"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageFIleName: "js"
    },
    {
        languageName: "java",
        languageFIleName: "java"
    },
    {
        languageName: "python",
        languageFIleName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})
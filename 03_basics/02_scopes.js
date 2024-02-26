//let a = 10
const b = 20
//var c = 30
let a = 300

if (true){
    let a = 10
    const b = 20
    //console.log("Inner:", a);
}



//console.log(a)
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName = "shaddy"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    //console.log(website);

    two()
}

//one()





if (true){
    const username = "shadab"
    if (username === "shadab"){
        const website = " youtube"
        //console.log(username + website);
    }
    // console.log(website); // this no execute because it is out of child curli braces
    
}
// console.log(username); // this no execute because it is out of parents curli braces





// ******************** Interesting *******************************

//  function
function addone(num){
    return num + 1
}

console.log(addone(5))

//  function
const addTo = function(num){
    return num + 2
} 
console.log(addTo(5))
const userEmail = []

if (userEmail){
    console.log("Got user Email")
} else{
    console.log("Don't Have use Email")
}

/* False Value

false, 0, -0, BigInt 0n, "", null, undefined, NaN */


/* truthy value

"0", 'false', " ", [], {}, funtion(){}, */



if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

    if (Object.keys(emptyObj).length === 0) {
        console.log("Object is empty");
    }

//  Immediately Invoked Function Expression (IIFE)


(function one(){
    //# one is named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB is connected ${name}`);
})('shadab')
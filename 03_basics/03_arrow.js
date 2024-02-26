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
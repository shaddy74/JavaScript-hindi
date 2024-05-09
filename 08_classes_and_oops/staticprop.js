class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this,this.username}`);
    }

    static createId(){
        return `123`
    }
}

const shadab = new User("shadab")
// console.log(shadab.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
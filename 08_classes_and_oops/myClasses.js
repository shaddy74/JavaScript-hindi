// ES6

class User{
    contructure(username, email, password){
        this.email = email;
        this.password = password;
    }

    encrypyPassword(){
        return `${this.password}abc`
    }
}


const chai = new User("shaddy", "shaddy@gmail.com", "123")
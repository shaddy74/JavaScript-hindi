class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value

    }

    

    get password(){
        return `${this._password}shadab`
    }

    set password(value){
        this._password = value
    }
}

const shadab = new User ("sadab20012005@gamil.com", "abc")
console.log(shadab.email);
const User ={
    _email: 'sadab2001@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}

const shaddy = Object.create(User)
console.log(shaddy.email)

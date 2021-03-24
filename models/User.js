const cart = require('./Cart')
class User {

    constructor(id, emailValue, passwordValue, firstName, lastName, numberRented = 0) {
        this.userId = id;
        this.email = emailValue;
        this.password = passwordValue;
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberRented = numberRented;
        carts = [];

    }

    getUserId() {  
       return this.userId 
    }

    getNumberRentend() {
        return this.numberRented
    }

    getEmail() {
        return this.email
    }

    login() {

    }

    logout() {

    }

    deleteAccount() {

    }

    getCarts() {
        return this.carts
    }

}


module.exports = User;


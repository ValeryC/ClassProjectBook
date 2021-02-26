// controllers dépendencies
const services = require('../services/index');
const bcrypt = require('bcrypt')

// controllers
const user_controller = require('./user');
const book_controller = require('./books');

// create a controllers object for map all the controllers
const controllers = {
    user: user_controller(services, bcrypt),
    book: book_controller(services),

}

// export our controllers object
module.exports = controllers;
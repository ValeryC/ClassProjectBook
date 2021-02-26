// service dépendencies
const repositories = require('../repositories/index'),
    nodemailer = require("nodemailer"),
    jwt = require('jsonwebtoken');

// services
const user_service = require('./user'),
    mailer_service = require('./mailer'),
    book_service = require("./book"),
    auth_service = require('./auth');

// create a services object to map all the services
const services = {
    user: user_service(repositories),
    mailer: mailer_service(nodemailer),
    book: book_service(repositories),
    jwt: auth_service(jwt),
}

// export our service object
module.exports = services;
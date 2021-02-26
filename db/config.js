const mysql = require('mysql2'),
    config = require('../config/env');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    database: "bookstore_db",
    port: "8889"


    // host: config.db_host,
    // user: config.db_user,
    // password: config.db_password,
    // database: config.db_name
});

module.exports = db;
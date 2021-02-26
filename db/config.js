const mysql = require('mysql2'),
    config = require('../config/env');

const db = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    port: config.db_port,

});

module.exports = db;
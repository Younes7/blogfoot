// Connection à la base de données mysql

const mysql = require('promise-mysql');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : "root",
    database : 'blogfoot'
});

module.exports = connection;

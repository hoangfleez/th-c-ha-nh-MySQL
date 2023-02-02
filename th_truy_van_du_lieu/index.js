const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'quangngu',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) {
        throw err.stack;
    } else {
        console.log("connect success");
    }
});

const sqlSelect = 'SELECT * FROM customer';
connection.query(sqlSelect, (err, results, fields) => {
    if (err) throw err;
    console.log(results)
});

const sqlWhere = "SELECT * FROM customer WHERE address = 'backan'";
connection.query(sqlWhere, (err, results, fields) => {
    if (err) throw err;
    console.log(results, "where");
});
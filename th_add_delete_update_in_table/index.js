const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'quangngu',
    charset: 'utf8_general_ci'
});
// Tao them bang moi
// const sqlCreate = "CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT)";
// connection.query(sqlCreate, function (err, result) {
//     if (err) throw err;
//     console.log("Create table success");
// });

// Xoa bang vua tao
// const sqlDrop = "DROP TABLE IF EXISTS products";
// connection.query(sqlDrop, function (err, result) {
//     if (err) throw err;
//     console.log("Drop table success");
// });


// Them cot "tuoi" vao bang
const sqlAlter = "ALTER TABLE customer ADD COLUMN age INT DEFAULT 30";
connection.query(sqlAlter, function (err, result) {
    if (err) throw err;
    console.log("Alter table success");
});
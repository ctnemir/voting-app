const mysql = require('mysql');

//db connection
const connection =  mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'password',
    database: 'voting'
});

connection.connect((err) =>{
    if(err) throw err;
});

//son bloğun getirilmesi
const getLastBlock = () =>{
    //return hash
}
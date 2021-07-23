const mysql = require('mysql');

const {DATABASE_SERVER_ERROR} = require("../constants/reponseConstants");

// Mysql connection configuration
const mysqlDatabaseConnection = mysql.createConnection({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
});

// Mysql connection
mysqlDatabaseConnection.connect((error) => {
    if(error) {
        if (process.env.ENV === 'local') {
            console.log('---------------------------------');
            console.log('CONNECTION FAILURE TO MYSQL DATABASE')
            console.log(error)
            console.log('---------------------------------');
        }
    }
});

// Close connexion handler
mysqlDatabaseConnection.on("close", function (error) {
    if (process.env.ENV === 'local') {
        console.log('---------------------------------');
        console.log('CONNECTION TO MYSQL DATABASE CLOSED');
        console.log(error);
        console.log('---------------------------------');
    }
});

// Subit error handler
mysqlDatabaseConnection.on("error", function (error) {
    if (process.env.ENV === 'local') {
        console.log('---------------------------------');
        console.log('ERROR AT CONNECTION TO MYSQL DATABASE');
        console.log(error);
        console.log('---------------------------------');
    }
});

// Database query
module.exports.mysqlDatabaseConnection = function (sqlQuery, sqlParameters = []) {
    return new Promise((resolve) => {
        mysqlDatabaseConnection.query(sqlQuery, sqlParameters, (error, rows) => {
            if (!error) {
                resolve({data: rows, status: true, message: ''});
            } else {
                if (process.env.ENV === 'local') {
                    console.log('---------------------------------');
                    console.log('MYSQL DATABASE QUERY ERROR');
                    console.log(error);
                    console.log('---------------------------------');
                }
                resolve({data: [], status: false, message: DATABASE_SERVER_ERROR})
            }
        });
    });
};
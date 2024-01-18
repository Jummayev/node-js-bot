const mysql = require('mysql2/promise');
require('dotenv').config();

const connectionConfig = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    rowsAsArray: false,
    waitForConnections: true,
};


// create the connection to database
const connection = mysql.createPool(connectionConfig)

async function senQuery(sql, params) {
    try {
        return await connection.execute(sql, params)
    } catch (error) {
        console.error('MySQL Query Error:', error);
        throw error;
    }
}

module.exports = {
    query: senQuery
};

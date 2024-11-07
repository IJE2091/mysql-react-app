const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '192.168.1.40', // Your database host
    user: 'ojt1', // Your database user
    password: 'pawnheroadmin', // Your database password
    database: 'sanctionsdb' // Your database name
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database.');
});

module.exports = db;
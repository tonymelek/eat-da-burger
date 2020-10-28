const mysql = require('mysql');
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'lvyy2r1x5eh3r643',
        password: 'e6rwukhh69vmouyy',
        database: 'abezvzpiwdvhp48j'
    })
    // console.log(connection);
}



module.exports = connection
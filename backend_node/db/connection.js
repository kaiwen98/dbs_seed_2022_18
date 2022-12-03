const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({  
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  port     : process.env.PORT
});

connection.connect(
  // function(err) {
  // if (err) throw err;
);

module.exports = connection;

// const getConnection = () => {
//   if (!connection) {
//     connection = mysql.createConnection(config);
    
//     connection.connect(function(err) {
//       if (err) {
//         console.log('db connection failed ' + err.stack);
//         return;
//       }
//       console.log('connected to db');
//     });
//   }
//   return connection
// }
// module.export = {getConnection}
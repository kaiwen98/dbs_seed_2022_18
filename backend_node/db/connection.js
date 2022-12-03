import mysql from 'mysql';
import {} from 'dotenv/config'; 

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    port     : process.env.PORT
  });
  
  connection.connect(function(err) {
    if (err) {
      console.log(connection);
      console.log('db connection failed ' + err.stack);
      return;
    }
    console.log('connected to db');
  });
  
// connection.end();

export default connection;
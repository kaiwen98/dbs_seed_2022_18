import express from "express";
import cors from "cors";
// import db from "./models";
import transRouter from "./routes/sched_trans.js";
import mysql from 'mysql';

const app = express();

app.use(express.json());
app.use(cors());

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

// Routers
app.get("/", (req, res) => {app.get("/", (req, res) => {
  res.send("this is the test route to make sure server is working")
})
  res.send("this is the test route to make sure server is working")
})

app.use("/sched_trans", transRouter);

// db.sequelize.sync().then(() => {
app.listen(5000, () => {
console.log("Server running on port 5000");
});
// });
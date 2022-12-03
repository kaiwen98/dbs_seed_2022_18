const express =require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const transRouter = require('./routes/sched_trans.js');
const connection = require('./db/connection');
// import trans from "../models/sched_trans";

const app = express();
app.use(express.json());
app.use(cors());

// app.use("/", transRouter);

app.get('/',(req, res) => {
  // console.log("CONN: ", Connection)
  connection.query( "SELECT * from Bank.ScheduledTransactions", function(err, data, fields){
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
  })
})

app.post('/newTrans', (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [req.body.TransactionID]
  connection.query( "INSERT INTO Bank.ScheduledTransactions (TransactionID) VALUE(?)", 
  [values],
  function(err, data, fields){
      if(err) return next(new AppError(err, 500))
      res.status(201).json({
        status: "success",
        message: "new Trans created",
      });
  })
})

// db.sequelize.sync().then(() => {
app.listen(5000, () => {
console.log("Server running on port 5000");
});
// });
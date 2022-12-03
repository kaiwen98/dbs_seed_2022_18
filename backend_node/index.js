const express =require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require('./db/connection');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/getTrans',(req, res) => {
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
  connection.query( "INSERT INTO Bank.ScheduledTransactions SET ?", 
  req.body,
  function(err, data, fields){
      if(err) return next(new AppError(err, 500))
      res.status(201).json({
        status: "success",
        message: "new Trans created",
      });
  })
})

app.delete('/deleteTrans/:ID', (req, res, next) => {
  if (!req.params.TransactionID) {console.log("No transaction found");
  }
  connection.query( "DELETE FROM Bank.ScheduledTransactions WHERE TransactionID=?",
  [req.params.TransactionID],
  function(err, fields){
      if(err) return next(new AppError(err, 500))
      res.status(201).json({
        status: "success",
        message: "Trans deleted",
      });
  })
})

app.listen(5000, () => {
console.log("Server running on port 5000");
});

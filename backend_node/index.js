const express =require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require('./db/connection');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/getTrans/:AccountID',(req, res) => {
  connection.query( "SELECT * FROM Bank.ScheduledTransactions WHERE AccountID=?", 
  [req.params.AccountID],
  function(err, data, fields){
      if(err) res.send(err);
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
  })
})

app.post('/newTrans', (req, res, next) => {
  if (!req.body) res.send("No form data found");
  connection.query( "INSERT INTO Bank.ScheduledTransactions SET ?", 
  [req.body],
  function(err, data, fields){
      if(err) res.send(err)
      res.status(201).json({
        status: "success",
        message: "new Trans created",
      });
  })
})

app.delete('/deleteTrans/:AccountID/:TransactionID', (req, res, next) => {
  if (!req.params.TransactionID) {console.log("No transaction found");
  }
  connection.query( "DELETE FROM Bank.ScheduledTransactions WHERE AccountID=? AND TransactionID=?",
  [req.params.AccountID, req.params.TransactionID],
  function(err, fields){
      if(err) res.send(err);
      res.status(201).json({
        status: "success",
        message: "Trans deleted",
      });
  })
})

app.listen(5000, () => {
console.log("Server running on port 5000");
});

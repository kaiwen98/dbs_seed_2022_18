var {getConnection} = require('../db/connection.js');

let transactions = [];

const dbConnection = getConnection;

const newTransaction = (req,res) => {
    const transaction = req.body;
    transactions.push(transctions);
    res.send(transaction);
}

const getTransactions = (req, res) => {
    // console.log("CONN: ", dbConnection)
    transactions = dbConnection.query( 'select * from Bank.ScheduledTransactions', function(error, results){
        if (results) {
            res.send(transactions)
        } else {
            console.log(error);
        }
    })
}

const deleteTransaction = (req, res) => {
    const { accountId } = req.params;
    transactions = transactions.filter((transaction) => transaction.accountId != accountId);
}

module.export = {newTransaction, getTransactions, deleteTransaction};
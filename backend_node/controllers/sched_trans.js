import mysql from "../db/connection.js";

let transactions = [];
export const newTransaction = (req,res) => {
    const transaction = req.body;
    transactions.push(transctions);
    res.send(transaction);
}
export const getTransactions = (req, res) => {
    console.log('test get')
    const transactions = connection.query( 'select * from Bank.ScheduledTransactions', function(error, results){
        if (results) {
            res.send(transactions)
        } else {
            console.log(error);
        }
    })
    
}

export const deleteTransaction = (req, res) => {
    const { accountId } = req.params;
    transactions = transactions.filter((transaction) => transaction.accountId != accountId);
}
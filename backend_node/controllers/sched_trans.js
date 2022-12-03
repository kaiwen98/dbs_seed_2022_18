let transactions = [];
export const newTransaction = (req,res) => {
    const transaction = req.body;
    transactions.push(transctions);
    res.send(transaction);
}
export const getTransactions = (req, res) => {
    res.send(transactions);
}

export const deleteTransaction = (req, res) => {
    const { accountId } = req.params;
    transactions = transactions.filter((transaction) => transaction.accountId != accountId);
}
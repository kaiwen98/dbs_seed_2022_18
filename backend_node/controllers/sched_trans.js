let transactions = [];

export const getTransaction = (req, res) => {
    const transaction = req.body;
    transactions.push(transaction);
    res.send(`Transaction added to the database!`);
}
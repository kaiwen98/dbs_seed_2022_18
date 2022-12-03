const express = require('express');
const { newTransaction, getTransactions, deleteTransaction } = require('../controllers/sched_trans.js');

const router = express.Router();

// Return all transactions from database
router.get('/', getTransactions);

// Create and add transaction to database
router.post('/', newTransaction);

// Delete transaction from database
router.delete('/:transationId', deleteTransaction);

module.exports = transRouter;
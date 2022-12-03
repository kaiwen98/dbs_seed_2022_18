import express from 'express';
import { newTransaction, getTransactions, deleteTransaction } from '../controllers/sched_trans';

const router = express.Router();

// Return all transactions from database
router.get('/', getTransactions);

// Create and add transaction to database
router.post('/', newTransaction);

// Delete transaction from database
router.delete('/:transationId', deleteTransaction);

export default router;
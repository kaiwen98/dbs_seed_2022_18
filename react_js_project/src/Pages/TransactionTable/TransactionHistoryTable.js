import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Tooltip from './Tooltip'
import data from './data';

const TransactionHistoryTable = ({

}) => {
  const [transactions, setTransactions] = useState([]) 
  const [loading, setLoading] = useState(true)

  const TransactionRow = ({
    id,
    transactionID,
    accountID,
    receivingAccountID,
    date,
    transactionAmount,
    comment
  }) => (
    <tr>
      <th scope="row">{id}</th>
      <td>{transactionID}</td>
      <td>{accountID}</td>
      <td>{receivingAccountID}</td>
      <td>{date}</td>
      <td>{transactionAmount}</td>
      <td>{comment}</td>
    </tr>
  )

  useEffect(() => {
    const filteredData = data.filter(data => new Date(data.date) <= new Date()) 
    setTransactions(
      filteredData
    )
    setLoading(false)
  }, [data])

  return (
    <div>
      <h1>TransactionTable</h1>
      <table class="table table-striped table-dark">
        <thead>

          <tr>
            <th scope="col">ID</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Account ID</th>
            <th scope="col">Receiving Account ID</th>
            <th scope="col">Date</th>
            <th scope="col">Transaction Amount</th>
            <th scope="col">Comment</th>
            
          </tr>
        </thead>
        <tbody>
          {
            loading 
            ? <Loader/>
            : transactions.map(
                (transaction, id) => (
                  <TransactionRow
                    id={id}
                    transactionID={transaction.transactionID}
                    accountID={transaction.accountID}
                    receivingAccountID={transaction.receivingAccountID}
                    date={transaction.date}
                    transactionAmount={transaction.transactionAmount}
                    comment={transaction.comment}
                  />
                )
            )
          }
        </tbody>
      </table>
    </div>
  )
}


export default TransactionHistoryTable

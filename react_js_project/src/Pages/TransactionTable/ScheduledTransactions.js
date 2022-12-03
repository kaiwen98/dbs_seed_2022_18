import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import data from './data';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const ScheduledTransactions = ({

}) => {
  const [transactions, setTransactions] = useState([]) 
  const [loading, setLoading] = useState(true)

  const deleteTransaction = (transactionID) => {
    console.log(transactionID)

    Swal.fire({
      title: 'Deleted Transaction!',
      icon: 'success',
    })
  }

  const TransactionRow = ({
    id,
    transactionID,
    accountID,
    receivingAccountID,
    date,
    transactionAmount,
    comment,
    deleteTransaction,
  }) => (
    <tr>
      <th scope="row">{id}</th>
      <td>{transactionID}</td>
      <td>{accountID}</td>
      <td>{receivingAccountID}</td>
      <td>{date}</td>
      <td>{transactionAmount}</td>
      <td>{comment}</td>
      <td>
        <Button variant="danger" onClick={()=>deleteTransaction(transactionID)}>Delete Transaction</Button>{' '}
      </td>
    </tr>
  )


  useEffect(() => {
    const filteredData = data
      .filter(data => new Date(data.date) > new Date()) 
      .map(data => ({...data, date: new Date(data.date).toLocaleString()}))
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
            <th scope="col">Delete</th>
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
                    deleteTransaction={deleteTransaction}
                  />
                )
              )
          }
        </tbody>
      </table>
    </div>
  )
}


export default ScheduledTransactions

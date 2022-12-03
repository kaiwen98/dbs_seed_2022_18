import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader'
import Tooltip from './Tooltip'
import data from './data';
import '../../Stylesheets/TransactionHistoryTable.scss';

const TransactionHistoryTable = ({

}) => {
  const [transactions, setTransactions] = useState([]) 
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
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


  const checkIfUserIsLoggedIn =()=>{
      let tempLoggedInUserId = localStorage.getItem("loggedInUserID");
      if(tempLoggedInUserId){
          console.log("Pass user auth check");
          return true;
      }
      else{
          console.log("Fail user auth check");
          return false;
      }
  }

  useEffect(() => {
    if(!checkIfUserIsLoggedIn()){
      console.log("Failed user is login check");
      return navigate('/login');
    }
    const filteredData = data.filter(data => new Date(data.date) <= new Date()) 
    setTransactions(
      filteredData
    )
    setLoading(false)
  }, [data])

  return (
    <div className="transactionTable">
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

import React from 'react'
import { useState, useEffect } from 'react'
import Api from '../Api/Api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import {PageCard, PageContainer} from '../Commons/styled'

const Account_Details = () => {
  const useEffect=()=>{

  }
  const [demoAccountDetails, setDemoAccountDetails] = useState([
      {
          "AccountID": 621156213,
          "UserID": 1,
          "AccountType": "Saving",
          "AcccountBalance": 70200.71
      },
      {
          "AccountID": 958945214,
          "UserID": 1,
          "AccountType": "Current",
          "AcccountBalance": 99720.46
      },
      {
          "AccountID": 828120424,
          "UserID": 2,
          "AccountType": "Multiplier",
          "AcccountBalance": 50640.12
      },
      {
          "AccountID": 322798030,
          "UserID": 3,
          "AccountType": "Multiplier",
          "AcccountBalance": 39740.17
      },
      {
          "AccountID": 353677039,
          "UserID": 3,
          "AccountType": "Saving",
          "AcccountBalance": 76660.21
      },
      {
          "AccountID": 259555772,
          "UserID": 4,
          "AccountType": "Saving",
          "AcccountBalance": 14020.58
      },
      {
          "AccountID": 339657462,
          "UserID": 1,
          "AccountType": "Current",
          "AcccountBalance": 47380.33
      },
      {
          "AccountID": 785703027,
          "UserID": 5,
          "AccountType": "Current",
          "AcccountBalance": 42460.32
      }
  ]);

  const [filteredList, setFilteredList] = new useState(demoAccountDetails);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...demoAccountDetails];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await api.get('/Api');
//         setPosts(response.data);
//       } catch (err) {
//         if (err.response) {
//           // Not in the 200 response range 
//           console.log(err.response.data);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else {
//           console.log(`Error: ${err.message}`);
//         }
//       }
//     }

//     fetchPosts();
//   }, [])



  return (
    <>
      <PageContainer>
      <PageCard>
        <h1>Customer's Details</h1>
        
        <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
        </div>

        <Table>
        <th>Account ID</th>
        <th>User ID</th>
        <th>Account Type</th>
        <th>Account Balance</th>
          {filteredList.map((accountdetails,index) => {
              return (
                  <tr key={index}>
                    <td>{accountdetails.AccountID}</td>
                    <td>{accountdetails.UserID}</td>
                    <td>{accountdetails.AccountType}</td>
                    <td>{accountdetails.AcccountBalance}</td>
                  </tr>
              )
          })}
        </Table>

      </PageCard>
        </PageContainer>
      </>
 
  )

}

export default Account_Details

import TransactionHistoryTable from './Pages/TransactionTable/TransactionHistoryTable';
import TransactionTablePage from './Pages/TransactionTable/TransactionTablePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewTransactions from "./Pages/NewTransactions";
import Loginpage from './Pages/Loginpage';
import WithNavBar from './Components/WithNavBar';
import React from 'react';
import Account_Details from './Pages/Account_Details';
import './Stylesheets/App.scss';

function App() {
  return (
    <>
      <div className={`app app--is-login`}>
          <Routes>
            {/* All routes with navbar to be appended here */}
            <Route element={<WithNavBar/>}>
              <Route path='/transaction_table' element={<TransactionHistoryTable/>}></Route>
              <Route path='/transaction_table_page' element={<TransactionTablePage/>}></Route>
              <Route path="/newTrans" element={<NewTransactions/>}></Route>
              <Route path='/account_details' element={<Account_Details></Account_Details>}></Route>
            </Route>
            {/* Routes to not show navbar to be appended here */}
            <Route path='/login' element={<Loginpage currentState='login'></Loginpage>}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;

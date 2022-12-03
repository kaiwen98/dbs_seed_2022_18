import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import React from 'react';
import Account_Details from './Pages/Account_Details';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/account_details' element={<Account_Details></Account_Details>}></Route>
      </Routes>
    </>
  );
}

export default App;

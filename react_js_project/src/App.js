import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import TransactionHistoryTable from './Pages/TransactionTable/TransactionHistoryTable';
import TransactionTablePage from './Pages/TransactionTable/TransactionTablePage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/transaction_table' element={<TransactionHistoryTable/>}></Route>
        <Route path='/transaction_table_page' element={<TransactionTablePage/>}></Route>
      </Routes>
    </>
  );
}

export default App;

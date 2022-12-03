import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import TransactionHistoryTable from './Pages/TransactionTable/TransactionHistoryTable';
import TransactionTablePage from './Pages/TransactionTable/TransactionTablePage';
import Loginpage from './Pages/Loginpage';
import WithNavBar from './Components/WithNavBar';


function App() {
  return (
    <>
      <Routes>
        
        {/* All routes with navbar to be appended here */}
        <Route element={<WithNavBar />}>
          <Route path='/home' element={<Homepage></Homepage>}></Route>
          <Route path='/transaction_table' element={<TransactionHistoryTable/>}></Route>
          <Route path='/transaction_table_page' element={<TransactionTablePage/>}></Route>
        </Route>
        {/* Routes to not show navbar to be appended here */}
        <Route path='/login' element={<Loginpage currentState='login'></Loginpage>}></Route>
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Loginpage></Loginpage>}></Route>
      </Routes>
    </>
  );
}

export default App;

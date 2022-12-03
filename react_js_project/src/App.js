import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
      </Routes>
    </>
  );
}

export default App;

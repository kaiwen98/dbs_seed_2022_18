import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import WithNavBar from './Components/WithNavBar';


function App() {
  return (
    <>
      <div className={`app app--is-login`}>
          <Routes>
            {/* All routes with navbar to be appended here */}
            <Route element={<WithNavBar />}>
              <Route path='/home' element={<Homepage></Homepage>}></Route>
            </Route>
            {/* Routes to not show navbar to be appended here */}
            <Route path='/login' element={<Loginpage currentState='login'></Loginpage>}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;

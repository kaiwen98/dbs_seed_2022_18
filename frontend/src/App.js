import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Register from './views/Register'
import {AuthProvider} from './contexts/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar/>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <PrivateRoute
              exact
              path="/"
              component={Dashboard}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

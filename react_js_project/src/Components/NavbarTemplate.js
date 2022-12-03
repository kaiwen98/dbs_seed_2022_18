import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../Stylesheets/Navbar.scss';

const NavbarTemplate = (props) => {
  const navigate = useNavigate(); //For navigation to another page
  const [loggedInUserName, setLoggedInUserName] = useState(''); //ID of User that is currently logged in

  useEffect(() => {
    let tempLoggedInUserName = checkIfUserIsLoggedIn();
    if(tempLoggedInUserName){
      setLoggedInUserName(tempLoggedInUserName);
    }
  }, []);

  const checkIfUserIsLoggedIn=()=>{
      let tempLoggedInUserName = localStorage.getItem('loggedInUserName');
      console.log(tempLoggedInUserName);
      if(!tempLoggedInUserName){
          return false;
      }
      return tempLoggedInUserName;  
  }
  /*
  Upon logging out clear storage
  */
  const handleLogoutEvent=(e)=>{
    e.preventDefault();
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);
    navigate("/login");
  }

  return (
    <Navbar  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* as={Link} Allows for utilization of link component as the navigation element whilst using Nav's css styling */}
            <Nav.Link as={Link} to={`/`}>Home</Nav.Link>
            <Nav.Link as={Link} to={`/login`}>Login</Nav.Link>
            <Nav.Link as={Link} to={`/account_details`}>Account Details</Nav.Link>
            <Nav.Link as={Link} to={`/profile`}>User Profile</Nav.Link>
            <NavDropdown title="Currency Hackathon" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/newTrans`}>New Transaction</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/transaction_table`}>Transaction History Table</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/transaction_table_page`}>Transaction Table</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
        <NavDropdown title={`Signed in as :${loggedInUserName}`} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogoutEvent}>Logout</NavDropdown.Item>
          </NavDropdown>
            {/* <Navbar.Text>
              Signed in as: <a href="#login">{props.loggedInUserName}</a>
            </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavbarTemplate
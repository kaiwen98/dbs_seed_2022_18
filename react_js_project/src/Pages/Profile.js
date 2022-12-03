import React, {useState, useEffect} from "react";
import Api from '../Api/Api';
import dayjs from 'dayjs';
import "../Stylesheets/Profile.scss"
import '../Stylesheets/Loginpage.scss'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const DUMMY_DATA = [
    {
        name: "Samuel Leow",
        accountNumber: "1234567890",
        amount: 1234,
        scheduledDate: "2020/12/12"
    }
]

const Profile = (props) => {    

    const [user, setUser] = useState();
    const [modalType, setModalType] = useState(false);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const checkIfUserIsLoggedIn =()=>{
        let tempLoggedInUserId = localStorage.getItem("loggedInUserID");
        if(tempLoggedInUserId){
            console.log("Pass user auth check");
            return true;
        }
        else{
            console.log("Fail user auth check");
            return false;
        }
    }

    useEffect(()=>{
        const setUpProfilePage=async()=>{
            if(!checkIfUserIsLoggedIn()){
                console.log("Failed user is login check");
                return navigate('/login');
            }

            let tempLoggedInUserId = localStorage.getItem("loggedInUserID");
            console.log(tempLoggedInUserId);
            const res = await Api.get(`/user/${tempLoggedInUserId}`); // data automatically converted to json format
            console.log(res);
            console.log("TEST");
        }

        setUpProfilePage();
    })

    const buttonHandler = (type) => {
        switch(type) {
            case 'Email':
                console.log("EMAIL")
                setModalType("Email");
                break
            case 'Address':
                console.log("ADDRESS")
                setModalType("Address");
                break
            default:
              return false;
          }
    }

    const handleClose = () => {
        setModalType(false);
    } 

    const saveEmail = () => {
        console.log(email)
        setModalType(false);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const saveAddress = () => {
        console.log(address)
        setModalType(false);
    }

    const addressHandler = (e) => {
        setAddress(e.target.value)
    }

    return (
        <React.Fragment>
            <Modal show={modalType==="Email"} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                        value={email}
                        onChange = {(e) => emailHandler(e)}
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveEmail}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalType==="Address"} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        autoFocus
                        value={address}
                        onChange = {(e) => addressHandler(e)}
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveAddress}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <section className="form-block transaction-form-block">
                <header className="form-block__header">
                    <h1>Profile</h1>
                </header>
                <div>
                    <div className="form-block__input-wrapper">
                        <div className="form-group form-group--login">
                            <br />
                            <div className="profile-inner-container">
                                <h6>Username:</h6>
                            </div>
                            <br />
                            <br />
                            <div className="profile-inner-container">
                                <h6>Email address:</h6>
                                <button className="profile-button" onClick={(e) => buttonHandler("Email")}>Edit Email </button>
                            </div>
                            <br />
                            <br />
                            <div className="profile-inner-container">
                                <h6>First Name:</h6>
                            </div>
                            <br />
                            <br />
                            <div className="profile-inner-container">
                                <h6>Last Name:</h6>
                            </div>
                            <br />
                            <br />
                            <div className="profile-inner-container">
                                <h6>Address:</h6>
                                <button className="profile-button" onClick={(e) => buttonHandler("Address")}>Edit Address </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

};

export default Profile;

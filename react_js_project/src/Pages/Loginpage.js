import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Alert from 'react-bootstrap/Alert';
import '../Stylesheets/Loginpage.scss'

const LoginPage = (props) => {
        const [username, setUsername] = useState(''); // Username variable
        const [password, setPassword] = useState(''); //Password variable
        const [repeatPassword, setRepeatPassword] = useState(''); //Repeat password variable
        const [email, setEmail] = useState(''); //Email variable
        const [state, setState] = useState(props.currentState); //Login state
        const [showAlert, setShowAlert] = useState(false);  //Show alert variable
        const [alertErrorMsg, setAlertErrorMsg] = useState(''); //alert error message variable
        const navigate = useNavigate();

        console.log("IN LOGIN PAGE");
        //Cannot set state here will cause the page to re-render infinitely resulting in an error
        //Instead, set the state at where the state value is declared
        //https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number

        /*
        Dismisses alert when backdrop is clicked
        */
        const dismissAlertViaBackdrop = () =>{
            return setShowAlert(false);
        }
        
        /*
        Determine if user is attempting to login/register for an account
        Check to ensure all fields are filled in otherwise display error message
        Upon successful account registration, clear all inputs and direct user to login screen
        Upon successful login, direct user to home page
        */
        const onSubmit = async(e) =>{
            console.log("Within on submit");
            e.preventDefault();

            //User attempting to login
            if(state === 'login'){
                if(!username || !password){
                    setAlertErrorMsg('Both username and password have to be filled in!');
                    return setShowAlert(true);
                    // return alert("Username and password has to be entered");
                }
        
                let loginStatus = await props.loginFunction(username,password);
                if(loginStatus.success === false){
                    setAlertErrorMsg("No such user exists");
                    return setShowAlert(true);
                }
                else{
                    console.log("Direct user to home page");
                    return navigate('/');
                }
            }
        }


        return (
            <div className="loginCumRegisterPageContainer">
                {/* If displaying of element is used with tenary operator, the fadeIn and fadeOut class will have no effect */}
                <div className={`app app--is-${state}`}>
                    <div className={`form-block-wrapper form-block-wrapper--is-${state}`} ></div>
                    <section className={`form-block form-block--is-${state}`}>
                        <header className="form-block__header">
                            <h1>Welcome back!</h1>
                            <div className="form-block__toggle-block">
                                <span>Already have an account? Click here &#8594;</span>
                                <label htmlFor="form-toggler"></label>
                            </div>
                        </header>
                        <form onSubmit={onSubmit}>
                            <div className="form-block__input-wrapper">
                                <div className="form-group form-group--login">
                                    <Input type="text" id="username" label="Username" disabled={state === 'signup' || showAlert} value={username}/>
                                    <Input type="password" id="password" label="Password" disabled={state === 'signup' || showAlert} value={password}/>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        
        )
}

export default LoginPage
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Alert from 'react-bootstrap/Alert';
import '../Stylesheets/Loginpage.scss'
import Api from '../Api/Api';


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
            console.log(state);
            //User attempting to login
            if(state === 'login'){
                console.log("Within state login");
                if(!username || !password){
                    setAlertErrorMsg('Both username and password have to be filled in!');
                    return setShowAlert(true);
                    // return alert("Username and password has to be entered");
                }
        
                // let loginStatus = await loginFunction(username,password);
                let loginStatus = await loginFunction(username,password);
                console.log("LOGIN OBJ");
                console.log(loginStatus);
                if(loginStatus.code === 400){
                    setAlertErrorMsg("Failed to login no such user exist");
                    return setShowAlert(true);
                }
                else{

                    console.log("User successfully logged in");

                    //Login user into session
                    localStorage.setItem("loggedInUserID",loginStatus.message.id);
                    localStorage.setItem("loggedInUserName",loginStatus.message.id);
                    console.log(localStorage);
                    return navigate('/home');
                }
            }
        }

        const usernameChangeEventHandler=(e)=>{
            // console.log("Username has been changed");
            // console.log(e.target.value);
            setUsername(e.target.value);
        }

        const passwordChangeEventHandler=(e)=>{
            // console.log("Password has been changed");
            // console.log(e.target.value);
            setPassword(e.target.value);
        }

        // Backend, Validate user login information 
        const validateLoginFunction = async (username,password) => {
        try{
            // const res = await Api.get(`/login/${username}/${password}`); // data automatically converted to json format
            // const res = {"code":200, "message":"Login fail backend check"};
            const res = {"code":400, "message":{'id':1,"username":"timothy"}};
            console.log("RES");
            console.log(res);
            if(res.code == 400){
                console.log("Login passed backend check");
                return {"code":200,"message":res.message};
            }
            else{
                console.log("Login failed backend check");
                return {"code":400,"message":res.message};
            }
        } 
            catch (err){
                //Axios automatically catches the error > 200 range
                console.log(`Error :${err.message}`);
                return false;
            }
        }
      
        // Login
        const loginFunction = async(username,password) => {
        console.log("Setting login status to true");
        let loginValidation = await validateLoginFunction(username,password);
            if(loginValidation.code === 200){
                console.log("Managed to successfully login");
                return {"code":200,"message":loginValidation.message};
            }
            else{
                console.log("Failed to login");
                return {"code":400,"message":loginValidation.message};
            }
        }


        return (
            <div className="loginCumRegisterPageContainer">
                    {/* If displaying of element is used with tenary operator, the fadeIn and fadeOut class will have no effect */}
                    <Alert variant="danger" onClose={() => setShowAlert(false)} className={`${showAlert ? 'loginFadeIn' : 'loginFadeOut'}`} dismissible>
                    <Alert.Heading>Error Logging In</Alert.Heading>
                    <p>
                        {alertErrorMsg}
                    </p>
                </Alert>
                {showAlert && 
                    <div id="loginBackdrop" onClick={dismissAlertViaBackdrop}></div>
                }
                <div className={`app app--is-${state}`}>
                    <div className={`form-block-wrapper form-block-wrapper--is-${state}`} ></div>
                    <section className={`form-block form-block--is-${state}`}>
                        <header className="form-block__header">
                            <h1>Welcome back!</h1>
                            <div className="form-block__toggle-block">
                                <span>Don't Already have an account? Click here &#8594;</span>
                                <label htmlFor="form-toggler"></label>
                            </div>
                        </header>
                        <form onSubmit={onSubmit}>
                            <div className="form-block__input-wrapper">
                                <div className="form-group form-group--login">
                                    <Input type="text" id="username" label="Username" value={username} onValueChange={usernameChangeEventHandler}/>
                                    <Input type="password" id="password" label="Password" value={password} onValueChange={passwordChangeEventHandler}/>
                                </div>
                            </div>
                            <button className="button button--primary full-width" type="submit">Login</button>
                        </form>
                    </section>
                </div>
            </div>
        
        )
}

export default LoginPage
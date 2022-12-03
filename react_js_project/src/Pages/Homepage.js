import React from 'react'
import logo from '../logo.svg';
import '../Stylesheets/App.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Api from '../Api/Api';

const Homepage = () => {
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
        const setUpPageData=async()=>{
          console.log("in setUpPageData");
          await testBackendCall();
        }

        setUpPageData();
      },[])
    
      const testBackendCall=async()=>{
        try{
            console.log("MAKING TEST BACKEND CALL");
            const res = await Api.get(`/home/testBackendCall`); // data automatically converted to json format
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Home page</h1>
        </div>

    )
}

export default Homepage
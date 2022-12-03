import React from 'react'
import logo from '../logo.svg';
import '../Stylesheets/App.css'
import { useState, useEffect } from 'react'
import Api from '../Api/Api';

const Homepage = () => {
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
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    )
}

export default Homepage
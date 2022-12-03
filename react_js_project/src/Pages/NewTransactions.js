import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Api from '../Api/Api';
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';
import "../Stylesheets/NewTransactions.scss"
import '../Stylesheets/Loginpage.scss'
import Input from '../Components/Input';

const DUMMY_DATA = [
    {
        name: "Samuel Leow",
        accountNumber: "1234567890",
        amount: 1234,
        scheduledDate: "2020/12/12"
    }
]

const NewTransactions = (props) => {

    const dateFormat = 'YYYY-MM-DD';
    const [accountNumber, setAccountNumber] = useState("")
    const [amount, setAmount] = useState(0)
    const [comment, setComment] = useState("")
    const [scheduledDate, setScheduledDate] = useState(dayjs().format('YYYY-MM-DD'))
    const [validation, setValidation] = useState(false)
    const navigate = useNavigate()
    
    // useEffect(() => {
    //     const sendNewTransaction=async()=>{
    //       console.log("in setUpPageData");
    //       await sendNewTransactionBackend();
    //     }
    //     sendNewTransaction();
    //   },[])
    
    // const sendNewTransactionBackend=async()=>{
    //     try{
    //         console.log("MAKING TEST BACKEND CALL");
    //         const res = await Api.get(`/home/testBackendCall`); // data automatically converted to json format
    //         console.log(res);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

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
        if(!checkIfUserIsLoggedIn()){
            console.log("Failed user is login check");
            return navigate('/login');
        }
      },[])

    const accountNumberHandler = (event) => {
        setAccountNumber(event.target.value)
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const commentHandler = (event) => {
        setComment(event.target.value)
    }

    const scheduledDateHandler = (date, dateString) => {
        console.log(date, dateString);
        setScheduledDate(dateString)
      };

    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
            console.log("MAKING TEST BACKEND CALL");
            console.log(accountNumber)
            console.log(amount)
            console.log(comment)
            console.log(scheduledDate)
            let splitScheduledDate = scheduledDate.split("-")
            let isoTimestamp = new Date(splitScheduledDate[0], splitScheduledDate[1], splitScheduledDate[2])
            console.log(isoTimestamp)
            console.log(isoTimestamp.toISOString())
            // const res = await Api.get(`/home/testBackendCall`); // data automatically converted to json format
            // console.log(res);

            if (accountNumber.length <= 0) {
                alert("Please enter account number.")
            } else if (amount !== 0) {
                alert("Please enter valid amount to be transferred.")
            } else {
                console.log("IM HERE")
                setAccountNumber("")
                setAmount(0)
                setComment("")
                setScheduledDate(dayjs().format('YYYY-MM-DD'))
            }

            console.log("SCHDEULED TRANSACTION DONE")
        }
        catch(err){
            console.log(err);
        }
    }
    
    return (
        <section className="form-block transaction-form-block">
            <header className="form-block__header">
                <h1>New Transaction Form</h1>
            </header>
            <form onSubmit={onSubmit}>
                <div className="form-block__input-wrapper">
                    <div className="form-group form-group--login">
                        <Input type="text" id="accountNumber" label="Account ID" value={accountNumber} onValueChange={accountNumberHandler}/>
                        <Input type="number" id="amount" label="Amount" value={amount} onValueChange={amountHandler}/>
                        <Input type="text" id="comment" label="Comment" value={comment} onValueChange={commentHandler}/>
                        <DatePicker defaultValue={dayjs()} format={dateFormat} onChange={scheduledDateHandler} style={{height: '100px', width: '200px'}}/>
                    </div>
                </div>
                <button className="button button--primary full-width" type="submit">Schedule New Transaction</button>
            </form>
        </section>
    );

};

export default NewTransactions;
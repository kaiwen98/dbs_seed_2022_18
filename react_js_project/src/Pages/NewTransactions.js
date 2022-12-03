import React, {useState, useEffect} from "react";
import Api from '../Api/Api';
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';
import "../Stylesheets/NewTransactions.css"

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
    const [name, setName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [amount, setAmount] = useState(0)
    const [scheduledDate, setScheduledDate] = useState(dayjs())
    

    // useEffect(() => {
    //     // const setUpPageData=async()=>{
    //     //   console.log("in setUpPageData");
    //     //   await testBackendCall();
    //     // }
    //     // setUpPageData();

    //     // setStartDate(new Date())
    //   },[])
    
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

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const accountNumberHandler = (event) => {
        setAccountNumber(event.target.value)
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const scheduledDateHandler = (event) => {
        console.log(event)
        // setScheduledDate(event.target.value)
    }

    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

    
    return (
        <div className="NewTransactions-Container">
            <form className=".NewTransactions-Form">
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => nameHandler(e)}/>
                </label>
                <label>
                    Account Number:
                    <input type="text" name="accountNumber" value={accountNumber} onChange={(e) => accountNumberHandler(e)}/>
                </label>
                <label>
                    Amount: 
                    <input type="text" name="amount" value={amount} onChange={(e) => amountHandler(e)}/>
                </label>
                {/* <label>
                    Scheduled Date:
                    <input type="text" name="scheduledDate" value={scheduledDate} onChange={(e) => setScheduledDate(e)}/>
                </label> */}
                <DatePicker defaultValue={dayjs()} format={dateFormat} onChange={onChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default NewTransactions;

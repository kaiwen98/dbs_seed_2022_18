import React, {useState} from "react";
import "../Stylesheets/NewTransactions.css";

const NewTransactions = (props) => {

    const [name, setName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [amount, setAmount] = useState(12345)

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const accountNumberHandler = (event) => {
        setAccountNumber(event.target.value)
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default NewTransactions;

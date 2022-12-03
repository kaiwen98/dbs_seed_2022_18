import React, { useEffect, useState } from 'react'

const Tooltip = (props) => {
    const {id, deleteTransactions}= props

    // const deleteTransaction = () => {
    //     console.log("Deleted " + id)
        
    // }

    return (
        <button onClick={()=> deleteTransactions()}>
            X
        </button>
    );
}

export default Tooltip
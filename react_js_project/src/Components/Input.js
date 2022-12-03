import React from 'react'

const updateUsernameEventHandler= (e) =>{
    console.log("Within updateUsernameEventHandler");
    // setUsername(e.target.value);
}

const Input = (props) => {
  return (
    <>
        <input className="form-group__input" type={props.type} id={props.id} placeholder={props.label} disabled={props.disabled} value={props.value}  onChange={(e) => props.onValueChange(e)}/>
    </>

  )
}

export default Input
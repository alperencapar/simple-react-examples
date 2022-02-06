import React from 'react'

function Input(props){
    return(
        <div className="input-element-wrapper">
            <input placeholder={props.inputElement.placeholder} 
            type={props.inputElement.type}></input>
        </div>
    )
}

export default Input
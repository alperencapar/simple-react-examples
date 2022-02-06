import React from 'react'

const Input = ({type, name, placeholder, value, onChange}) => {
    return (
        <div className='form-element'>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    )
}

export default Input

import React from 'react';

const Input = ({ tipo, placeholder, pegarValorInput, submit }) => {
    return(
        <input 
        type={tipo} 
        placeholder={placeholder} 
        onChange={pegarValorInput}
        >
        </input>
    )
}
export default Input;
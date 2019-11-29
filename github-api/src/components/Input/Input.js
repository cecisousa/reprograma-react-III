import React from 'react';

const Input = ({ tipo, placeholder, pegarValorInput }) => {
    return(
        <input 
        type={tipo} 
        placeholder={placeholder} 
        onChange={pegarValorInput}>
        </input>
    )
}
export default Input;
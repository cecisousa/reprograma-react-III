import React from 'react';

const Button = (props) => {
    const { children } = props;
  
    return (
        <button onClick={props.click}> {children} </button>
    );
} 
export default Button;
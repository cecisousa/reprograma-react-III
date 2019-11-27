import React from 'react'

const Button = (props) => {
    const { funcao, children } = props;
    return(
        <button onClick={funcao}>{children}</button>
    )
}

export default Button;
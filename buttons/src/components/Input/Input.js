import React from 'react';

const Input = (props) => {
    const { tipo, placeholder, change} = props;

    return (
        <input 
            type={tipo} 
            placeholder={placeholder}
            onChange={change}></input>
    )
}

export default Input;

// Outra forma de chamar:

// import React from 'react';

// const Input = ({ tipo, placeholder, change }) => {

//     return (
//         <input 
//             type={tipo} 
//             placeholder={placeholder}
//             onChange={change}></input>
//     )
// }

// export default Input;

import React from 'react';

function Botao(props){
    return(
        <button className={props.classe} onClick={props.click}>{props.nomeBotao}</button>
    )
}

export default Botao;

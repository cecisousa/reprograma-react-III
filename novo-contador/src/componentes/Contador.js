import React from 'react';
import Botao from './Botao';
import './styles.css'

class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            total: 0
        }
    }

    maisUm = () => {
        this.setState((prevState) => {
            return{
                total: prevState.total + 1
            }
        })
    }

    menosUm = () => {
        this.setState((prevState) => {
            return{
                total: prevState.total - 1
            }
        })
    }

    render(){
        return(
            <div className="container">
                <Botao
                    classe="yellow"
                    nomeBotao="+1"
                    click={this.maisUm}   
                />
                <p>{this.state.total}</p>
                <Botao
                    classe="purple"
                    nomeBotao="-1"
                    click={this.menosUm}                
                />
            </div>
        )
    }
}

export default Contador;

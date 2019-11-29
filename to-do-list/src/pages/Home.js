import React, { Fragment } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import './Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            nomes: [
                "Jani",
                "Raissa",
                "Bruna"
            ]
        }
    }

    onChangeInput = e => {
        //  let value = element.target.value
        this.setState({ value: e.target.value })
       //  console.log(e.target.value)
    }

    adicionarItem = () => {
       this.setState({
           nomes: [ 
            ...this.state.nomes,
               this.state.value
           ]
       })
    }

    removerItem = (nome) => {
       // console.log(nome);
        let novoArray = this.state.nomes.filter(a => (
            a !== nome
        ));

            this.setState({
                nomes: novoArray
            })
    }

    render() {
        return (
            <Fragment>
                <Input placeholder="Digite seu nome"
                    tipo="text"
                    pegarValorInput={this.onChangeInput}></Input>
                {/* <Input placeholder="Digite sua senha" tipo="password"></Input> */}
                <Button click={this.adicionarItem}> 
                Cadastrar
                </Button>

                {/* {this.state.nomes.map((itemDoArray, indexDoMap) => (
                    <li key={indexDoMap}>{itemDoArray}</li>
                ))}
     */}

                <ul>
                    {this.state.nomes.map((value, i) => {
                        return (
                            <div key={i} className="lista_item">
                                <li>{value}</li>
                                {/* <Button click={() => this.removerItem(value)}> x </Button> */}
                             <Button click={() => this.removerItem(value)}> x </Button>   
                            </div>
                        );
                    })}

                </ul>
            </Fragment>
        );
    }
}
export default Home;
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
                "Aline",
                "Bia",
                "Ceci"
            ]
        }
    }

    onChangeInput = e => {
        this.setState({ value: e.target.value })
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
                <Button click={this.adicionarItem}> 
                Cadastrar
                </Button>
                <ul>
                    {this.state.nomes.map((value, i) => {
                        return (
                            <div key={i} className="lista_item">
                                <li>{value}</li>
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
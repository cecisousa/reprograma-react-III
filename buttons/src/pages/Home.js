import React, { Fragment } from 'react';
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            nomes: [
                "Arara",
                "Baleia",
                "Cachorro",
                "Dromedário",
                "Elefante"
            ]
        }
    }

    onChangeInput = (element) => {
        this.setState({ value: element.target.value })
    }

    addItem = () => {
        this.setState(() => {
            return {
                nomes: [...this.state.nomes, this.state.value],
            }
        })
    }

    deleteItem = (item) => {
        let novoArray = this.state.nomes.filter((nome) => {
            return nome !== item
        })

        this.setState(() => {
            return {
                nomes: novoArray
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Input
                    placeholder="Digite seu nome"
                    tipo="text"
                    change={this.onChangeInput}
                />
                <Button funcao={this.addItem}>Cadastrar</Button>
                <ul>
                    {this.state.nomes.map((item, i) => {
                        return (
                            <div key={i}>
                                <li>{item}</li>
                                <Button funcao={() => this.deleteItem(item)}>Excluir</Button>
                            </div>
                        )
                    })}
                </ul>
            </Fragment>

        )
    }
}

export default Home;
import React, { Fragment, Component } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import listaProdutos from '../mock/produtos';

class Produtos extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            produtos: listaProdutos
        }
    }

    valorInput = (param) => {
       // let valor = param.target.value;
        this.setState({ 
            value: param.target.value
        })
       // console.log(this.state.value)
    }

    pesquisar = () => {
       let novoArray = this.state.produtos.filter(val => val.title.includes(this.state.value));
       this.setState({
           produtos: novoArray
       })
    }

    render() {
        return (
            <Fragment>
                <Input
                placeholder="Pesquise seu produto"
                tipo="text"
                pegarValorInput={this.valorInput}
                ></Input>
                <Button
                click={this.pesquisar}
                >Pesquisar</Button>
                <div className="lista_item">
                    {this.state.produtos.map(item => (
                        <Card
                            key={item.id}
                            prod={item} />
                    ))}
                </div>
            </Fragment>
        )
    }
};
export default Produtos;
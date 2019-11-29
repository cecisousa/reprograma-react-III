import React, { Fragment, Component } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import listaProdutos from '../mock/produtos';
import CardUser from '../components/CardUser/CardUser';
import { getUser, getRepos } from '../api/users';

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {},
        }
    }

    valorInput = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    pesquisar = () => {
        getUser(this.state.value).then((abobrinha) => {
            this.setState({
                user: abobrinha.data
            })
            console.log(this.state.user, 'pesquisar')
        }
        ).catch(err => console.log(err))
    }

    pesquisarRepos = (login) => {
        getRepos(login).then(res => {
            this.props.history.push('/repos');
        })
    }

    render() {
        const { login, name, avatar_url } = this.state.user;
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
                    {this.state.user &&
                        <CardUser
                            img={avatar_url}
                            user={login}
                            name={name}
                            clicar={() => this.pesquisarRepos(login)}
                        />
                    }


                </div>
            </Fragment>
        )
    }
};
export default Usuarios;
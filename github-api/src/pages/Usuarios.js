import React, { Fragment, Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CardUser from '../components/CardUser/CardUser';
import { getUser, getRepos } from '../api/users';

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {},
            repos: []
        }
    }

    valorInput = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    pesquisar = () => {
        getUser(this.state.value).then((response) => {
            this.setState({
                user: response.data
            })
        }).catch(err => console.log(err))
    }

    pesquisarRepos = (login) => {
        getRepos(login).then(response => {
            this.setState({
                repos: response.data
            })
            this.props.history.push({
                pathname: "/repos",
                state: {
                    repos: this.state.repos
                }
            })
        }).catch(err => console.log(err))
    }

    render() {
        const { login, name, avatar_url } = this.state.user;
        return (
            <Fragment>
                <Input
                    placeholder="Pesquise por um usuário"
                    tipo="text"
                    pegarValorInput={this.valorInput}
                ></Input>
                <Button
                    click={this.pesquisar}
                >Pesquisar</Button>
                <div className="lista_item">
                    {this.state.user ?
                        <CardUser
                            img={avatar_url}
                            user={login}
                            name={name}
                            clicar={() => this.pesquisarRepos(login)}
                        />
                        : <p>Pesquise um usuário</p>
                    }
                </div>
            </Fragment>
        )
    }
};
export default Usuarios;
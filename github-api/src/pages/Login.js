import React from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import './Login.css';

const Login = (props) => (
    <div>
        <form className="login-form">
            <div className="group-label">
                <label> Usuário: </label>
                <Input tipo="text"></Input>
            </div>
            <div className="group-label">
                <label> Senha: </label>
                <Input password="password"></Input>
            </div>
            <Button>Entrar</Button>
        </form>
    </div>
);
export default Login;
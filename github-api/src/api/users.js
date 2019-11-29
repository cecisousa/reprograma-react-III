import config from './config';

function getUser(nomeUsuario) {
    const url = `/users/${nomeUsuario}`;
    return config.get(url);
}

function getRepos(nomeUsuario) {
    const url = `/users/${nomeUsuario}/repos`;
    return config.get(url);
}

export { getUser, getRepos };

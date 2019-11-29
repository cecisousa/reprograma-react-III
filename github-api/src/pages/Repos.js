import React from 'react';

const Repos = props => {
    const repos = props.location.state.repos;
    return (
        <ul>
            {repos.map(item => {
                return <div key={item.id}>
                    <li>{item.name}</li>
                    <p>Descrição: {item.description}</p>
                </div>
            })}
        </ul>
    )
}
export default Repos;
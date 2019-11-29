import React from 'react';

const CardUser = (props) => {
    const { name, user, img } = props;
  return (
        <div className="card" onClick={props.clicar}>
        <p>{name}</p>
        <p>{user}</p>
        <img src={img} className="card-img" alt="">
        </img>
    </div>
);
}
export default CardUser;
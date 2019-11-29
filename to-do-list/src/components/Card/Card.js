import React from 'react';
import './Card.css';
const Card = (props) => {
     const { price, title, img } = props.prod;
  return (
        <div className="card">
        <img src={img} className="card-img" alt={title}>
        </img>
        <p>{title}</p>
        <p>{price}</p>
    </div>
);
}
export default Card;
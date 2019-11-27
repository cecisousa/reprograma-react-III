import React from 'react'
import './Card.css'

const Card = props => {

    const { img, title, price } = props.produto;

    return (
        <div className="card">
            <img className="card-img" src={img} alt={"Celular"} />
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Card;
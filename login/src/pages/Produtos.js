import React, { Fragment } from 'react'
import Card from '../components/Card/Card'
import image from '../assets/img/celular.jpg'

const produtos = [
    {
        id: 1,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 2,
        title: "Celular na Black Friday",
        img: image,
        price: "1.299,90"
    },
    {
        id: 3,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 4,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 5,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 6,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 7,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 8,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 9,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    },
    {
        id: 10,
        title: "Celular na Black Friday",
        img: image,
        price: "1.229,90"
    }
]

const Produtos = props => {
    return (
        <Fragment>
            {produtos.map(item => (
                <Card key={item.id} produto={item}/>
            ))}
        </Fragment>
    )
}

export default Produtos;
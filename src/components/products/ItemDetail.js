import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({item}) => {
    const {title, description, price, image} = item;

    
    // INTEGRAR ESTOS VALORES AL PRODUCTO QUE SE CREE EN LA BASE DE DATOS PARA TRAERLOS COMO PROPS.
    const initial = 1;
    const stock = 18;
    const finalPrice = price ;
    
    const [cant, setCant] = useState(initial)

    const traerCant = (i) => {
        console.log(i)
        setCant(i)
    }

    const addToCart = () => {
        console.log(`has guardado ${cant} de productos '${title}' en el carrito`)
    }

    return (
        <div className="vistaProd">
            <h2>{title} </h2><span>Stock: {stock}</span>
            <img src={image} alt="foto Del Producto detalles"/>
            <ItemCount initial={initial} stock={stock} traerNum={traerCant}/>
            <p>${finalPrice}</p>
            <p>Sobre este Producto : <br/>{description}</p>

            <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
    );

}

export default ItemDetail;
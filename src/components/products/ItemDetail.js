import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {title, description, price, image} = item;

    return (
        <div className="vistaProd">
            <h2>{title} </h2><span>Stock: {17}</span>
            <img src={image} alt="foto Del Producto detalles"/>
            <ItemCount initial={1} stock={17}/>
            <p>${price}</p>
            <p>Sobre este Producto : <br/>{description}</p>

            <button>Agregar al Carrito</button>
        </div>
    );

}

export default ItemDetail;
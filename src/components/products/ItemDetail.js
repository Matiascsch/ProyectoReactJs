import React from "react";

const ItemDetail = ({item}) => {
    const {title, color, description, price, imgURL, stock} = item;

    return (
        <div className="vistaProd">
            <h2>{title} <span>{stock}</span></h2>
            <img src={imgURL} alt="foto Del Producto detalles"/>
            <p>${price}</p>
            <p>color: {color}</p>
            <p>{description}</p>
        </div>
    );

}

export default ItemDetail;
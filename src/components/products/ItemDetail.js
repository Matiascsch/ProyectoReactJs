import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {title, description, price, image} = item;

    // INTEGRAR ESTOS VALORES AL PRODUCTO QUE SE CREE EN LA BASE DE DATOS PARA TRAERLOS COMO PROPS.
    const initial = 1;
    const stock = 18;
    const finalPrice = price ;

    return (
        <div className="vistaProd">
            <h2>{title} </h2><span>Stock: {17}</span>
            <img src={image} alt="foto Del Producto detalles"/>
            <ItemCount initial={initial} stock={stock}/>
            <p>${finalPrice}</p>
            <p>Sobre este Producto : <br/>{description}</p>

            <button>Agregar al Carrito</button>
        </div>
    );

}

export default ItemDetail;
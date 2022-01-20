import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { CartContext } from "../../contexts/CartContexts";

const ItemDetail = ({item, idProd}) => {
    const {title, description, price, image, initial, stock} = item;

    const [cant, setCant] = useState(initial) // contador

    const finalPrice = (price / initial) * cant; // Calcular precio por cantidad de productos.
    
    // Contextos
    const { addToCart } = useContext(CartContext);
    const articulo = {
        producto : item,
        id : idProd,
        cantidad : cant
    }

    // Traer Numero de itemCount 
    const OnAdd = (contador) => {
        setCant(contador)
    }

    return (
        <div className="vistaProd">
            <img src={image} alt={`Imagen de ${title}`}/>

            <div className="detailInfo">
                <div className="detailItem">
                    <h2>{title}</h2> 
                    <span>Stock: {stock}</span>
                    <ItemCount initial={initial} stock={stock} OnAdd={OnAdd}/>
                </div>
                
                <p className="detailPrice">${finalPrice}</p>
                
                <div className="detailDescrip">
                    <h5>Sobre este Producto :</h5>
                    <p>{description}</p>
                </div>

                <button className="btnAddToCart" onClick={()=> addToCart(articulo)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;
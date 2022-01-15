import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { CartContext } from "../CartContexts";

const ItemDetail = ({item}) => {
    const {title, description, price, image} = item;
    // INTEGRAR ESTOS VALORES AL PRODUCTO QUE SE CREE EN LA BASE DE DATOS PARA TRAERLOS COMO PROPS.
    const initial = 1;
    const stock = 18;

    // Estados
    const [cant, setCant] = useState(initial) // contador

    const finalPrice = (price / initial) * cant; // Calcular precio por cantidad de productos.
    
    // Contextos
    const { addToCart , clearCart } = useContext(CartContext);
    

    // Traer Numero de itemCount 
    const traerCant = (num) => {
        setCant(num)
    }

    return (
        <div className="vistaProd">
            <img src={image} alt={`Imagen de ${title}`}/>

            <div className="detailInfo">
                <div className="detailItem">
                    <h2>{title}</h2> 
                    <span>Stock: {stock}</span>
                    <ItemCount initial={initial} stock={stock} traerNum={traerCant}/>
                </div>
                
                <p className="detailPrice">${finalPrice}</p>
                
                <div className="detailDescrip">
                    <h5>Sobre este Producto :</h5>
                    <p onClick={clearCart}>{description}</p>
                </div>

                <button className="btnAddToCart" onClick={()=> addToCart(item, cant)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;
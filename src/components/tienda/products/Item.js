import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) =>{
    const { title , price , image, stock, id } = producto;
    return (
        <article className="item">
            <Link to={"/tienda/detalles/"+ id}>
                <img src={image} alt="Foto de Producto"/> 
            </Link>

            <div className="infoItem">
                <h3>{title}</h3>

                <div className="itemPrice">
                    <p className="price">${price}</p>  
                    <p>Stock: {stock}</p>
                </div>
            </div>
        </article>
    );
}

export default Item;
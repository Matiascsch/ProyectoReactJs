import React from "react";

const Item = ({ producto }) =>{
    const { title , price , image, stock } = producto;
    
    return (
        <article className="item">
            <img src={image} alt="Foto de Producto"/> 

            <div className="infoItem">
                <h2>{title}</h2>

                <div className="itemPrice">
                    <p className="price">${price}</p>  
                    <p>Stock: {stock}</p>
                </div>
            </div>
        </article>
    );
}

export default Item;
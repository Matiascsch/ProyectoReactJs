import React from "react";

const Item = ({ producto }) =>{
    const { title , price , image } = producto;
    
    return (
        <article className="item">
            <img src={image} alt="Foto de Producto"/> 

            <div className="infoItem">
                <h2>{title}</h2>

                <p>${price}</p>  
            </div>
        </article>
    );
}

export default Item;
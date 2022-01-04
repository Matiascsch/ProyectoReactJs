import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({listaProds}) =>{

    // Return
        return (
            <div className="itemContainer">
                {
                listaProds.map((item)=>{
                    return(
                        <Link to={"/tienda/detalles/"+ item.id}>
                            <Item key={item.id} producto={item} />
                        </Link>
                    );
                })
                }
            </div>
        );
}

export default ItemList;
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
                        <Link key={item.id} to={"/tienda/detalles/"+ item.id}>
                            <Item producto={item} />
                        </Link>
                    );
                })
                }
            </div>
        );
}

export default ItemList;
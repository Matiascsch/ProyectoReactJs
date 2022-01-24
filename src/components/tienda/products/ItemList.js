import React from "react";
import Item from "./Item";

const ItemList = ({listaProds}) =>{

    // Return
        return (
            <div className="itemListContainer">
                <div className="itemContainer">
                    {
                    listaProds.map((item)=>{
                        return(  
                                <Item key={item.id} producto={item} />
                        );})
                    }
                </div>
            </div>
        );
}

export default ItemList;
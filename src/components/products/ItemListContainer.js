import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({name , greeting , listaProductos}) =>{
    
    return(

        <>
        <h2>{greeting} {name} ¿Como Estas?</h2>

        <ItemList  listaProductos={listaProductos}/>
        </>
    );
}

export default ItemListContainer;
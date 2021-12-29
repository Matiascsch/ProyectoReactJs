import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) =>{
    const productos = [
        {
            id: 1,
            title: "campera Montagne",
            price: 200,
            imgURL: "x"
        },
        {
            id: 2,
            title: "campera North Face",
            price: 250,
            imgURL: "xx"
        }
    ];
    
    return(

        <>
        <h2>{props.greeting} {props.name} ¿Como Estas?</h2>

        <ItemList  listaProductos={productos}/>
        </>
    );
}

export default ItemListContainer;
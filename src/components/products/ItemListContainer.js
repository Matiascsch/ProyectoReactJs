import React from "react";
import ItemList from "./ItemList";

const Saludo = (props) =>{

    return(
        <>
        <h2>{props.greeting} {props.name} ¿Como Estas?</h2>

        <ItemList />
        </>
    );
}

export default Saludo;
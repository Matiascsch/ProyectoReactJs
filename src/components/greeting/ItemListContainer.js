import React from "react";
import ItemCount from "./ItemCount";

const Saludo = (props) =>{
    return(
        <>
        <h2>{props.greeting} {props.name} ¿Como Estas?</h2>

        <ItemCount stock={15} initial={1}/>
        </>
    );
}

export default Saludo;
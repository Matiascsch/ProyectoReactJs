import React from "react";

const Saludo = (props) =>{
    return(
        <h2>{props.greeting} {props.name} ¿Como Estas?</h2>
    );
}

export default Saludo;
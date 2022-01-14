// CONTADOR DE PRODUCTOS
import { useState } from "react";

const ItemCount = ({ stock , initial ,traerNum }) => {
    
    const [contador, setContador] = useState(initial);

    const aumentarCant = () =>{
        if (contador < stock) 
            setContador(contador + initial);
            console.log("Has Aumentado la cantidad");
    }

    const disminuirCant = () =>{
        if (contador > initial)
            setContador(contador - initial);
            console.log("Has Disminuido la cantidad");
    }

    traerNum(contador)

    return(
        <div className="contador">
            <p>Cantidad: {contador}</p>
            
            <div className="btnAumDis">
                <button onClick={aumentarCant}>+</button>
                <button onClick={disminuirCant}>-</button>
            </div>
        </div>
    );
}


export default ItemCount;
// CONTADOR DE PRODUCTOS
import { useState } from "react";

const ItemCount = ({ stock , initial ,traerNum }) => {
    
    const [contador, setContador] = useState(initial);

    const aumentarCant = () =>{
        if (contador < stock) setContador(contador + initial);
            console.log("Has Aumentado la cantidad");
    }

    const disminuirCant = () =>{
        if (contador > initial) setContador(contador - initial);
            console.log("Has Disminuido la cantidad");
    }

    traerNum(contador)

    return(
        <div className="contador">
            <p>Cantidad: {contador}</p>

            <button onClick={aumentarCant}>Mas</button>
            <button onClick={disminuirCant}>Menos</button>
        </div>
    );
}


export default ItemCount;
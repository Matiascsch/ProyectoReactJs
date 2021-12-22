// CONTADOR DE PRODUCTOS
import { useState } from "react";

const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador, setContador] = useState(initial);

    const aumentarCant = () =>{

        if (contador < stock) setContador(contador + 1);
        console.log("Has Aumentado la cantidad");
    }

    const disminuirCant = () =>{
        if (contador > 1) setContador(contador - 1);
        console.log("Has Disminuido la cantidad");
    }

    return(
        <div className="contador">
            <p>Cantidad: {contador}</p>
            <p>Stock: {stock}</p>

            <button onClick={aumentarCant}>Mas</button>
            <button onClick={disminuirCant}>Menos</button>
        </div>
    );
}


export default ItemCount;
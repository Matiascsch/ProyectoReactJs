import React from "react";
import { useEffect , useState } from "react";
import Item from "./Item";

const ItemList = ({listaProductos}) =>{
    
    // uses 
    const [load , setLoad] = useState(true);
    const [productos, setProductos] = useState([]);
    
    useEffect(()=> {
        const promise = new Promise ((res,rej) => {
            setTimeout(()=>{
                res(listaProductos);
            },2000)
        })

        promise
            .then((listaProductos) => {
                setLoad(false);
                setProductos(listaProductos);
            })
            .catch(e => console.log("***ERROR PROMISE ItemList***" + e))
    });

    // Return
    if (load){
        return (
            <p>CARGANDO ARTICULOS</p>
        );
    }else{
        return (
            <>
                {productos.map((i)=>{
                    return(
                        <Item key={i.id} producto={i}/>
                    );
                })}
            </>
        );
    }
}

export default ItemList;
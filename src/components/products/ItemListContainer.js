import React from "react";
import ItemList from "./ItemList";
import { useState , useEffect } from "react";

const ItemListContainer = () =>{

    // uses 
    const [load , setLoad] = useState(true);
    const [productos, setProductos] = useState([]);
    
    useEffect( ()=> {
        const promise = fetch('https://fakestoreapi.com/products');
    
        promise
        .then((res) => res.json())
        .then((productos) => {
            console.log(productos);
            setLoad(false);
            setProductos(productos);
        })
        .catch(e => console.log("***ERROR PROMISE ItemList***" + e))
        
    } );

    if (load){
        return (
            <p>CARGANDO ARTICULOS</p>
        );
    }else{
        return(
            <div className="catalogoContainer">
                <ItemList listaProds={productos}/>
            </div>
        );
    }
}

export default ItemListContainer;
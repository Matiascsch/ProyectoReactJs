import React from "react";
import { useEffect , useState } from "react";
import Item from "./Item";

const ItemList = () =>{

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
    ]

    // uses 
    const [load , setLoad] = useState(true);
    
    useEffect(()=> {
        setTimeout(()=>{
            setLoad(false);        
        }, 2000);
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
                        <Item key={i.id} title={i.title} price={i.price} imgURL={i.imgURL}   />
                    );
                })}
            </>
        );
    }
}

export default ItemList;
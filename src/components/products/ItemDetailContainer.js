import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({listaProductos}) => {
    const [load, setLoad] = useState(true);
    const [getProduct, setGetProduct] = useState(listaProductos);
    
    useEffect(()=> {
        const promesa = new Promise ((res,rej) => {
            setTimeout(()=>{
                res(getItem);
            }, 2000)
        })
        
        promesa
            .then(()=> {
                getItem();
                setLoad(false);
            })
            .catch(e => console.log("*** ERROR en Promesa 'ItemDetailContainer' ***" + e))
    })

    const getItem = (id) => {
        const newItem = getProduct.filter( (item)=> item.id === id );

        return setGetProduct([newItem])
    }

    if (load){
        return <p>CARGANDO</p>
    }else{
        return (
            <ItemDetail item={getItem}/>
        )
    }
        
}

export default ItemDetailContainer;
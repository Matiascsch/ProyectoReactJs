import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [load, setLoad] = useState(true);
    const [getProduct, setGetProduct] = useState({});
    
    useEffect(()=> {
        const promesa = fetch('https://fakestoreapi.com/products/1');

        promesa
            .then(res => res.json())
            .then((data)=> {
                setGetProduct(data);
                setLoad(false);
            })
            .catch(e => console.log("*** ERROR en Promesa 'ItemDetailContainer' *** " + e));
    });

    if (load){
        return <p>CARGANDO</p>
    }else{
        return (
            <div className="detailContainer">
                <ItemDetail item={getProduct} />
            </div>
        );
    };
        
}

export default ItemDetailContainer;
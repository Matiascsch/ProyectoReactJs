import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [load, setLoad] = useState(true);
    const [getProduct, setGetProduct] = useState({});
    const {id} = useParams();
 
    useEffect(()=> {
        const promesa = fetch(`https://fakestoreapi.com/products/${id}`);

        promesa
            .then(res => res.json())
            .then((data)=> {
                setGetProduct(data);
                setLoad(false);
            })
            .catch(e => console.log("*** ERROR en Promesa 'ItemDetailContainer' *** " + e));
    },[id]);


    if (load){
        return <Loading />
    }else{
        return (
            <div className="detailContainer">
                <ItemDetail item={getProduct} />
            </div>
        );
    };
        
}

export default ItemDetailContainer;
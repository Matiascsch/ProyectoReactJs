import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemDetail from './ItemDetail';
import {db} from "../../../firebase";
import {collection, getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [load, setLoad] = useState(true);
    const [getProduct, setGetProduct] = useState({});
    const {id} = useParams();
 
    useEffect(()=> {
        const coleccion = collection(db, "productos");
        const documento = doc(coleccion, id);
        const pedido = getDoc(documento);
            pedido
                .then(res=>{
                    const producto = res.data();
                    
                    setGetProduct(producto)
                    setLoad(false);
                })
                .catch(e=> console.log(e));
    },[id]);


    if (load){
        return <Loading />
    }else{
        return (
            <div className="detailContainer">
                <ItemDetail item={getProduct} idProd={id}/>
            </div>
        );
    };
        
}

export default ItemDetailContainer;
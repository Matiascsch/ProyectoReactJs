import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemDetail from './ItemDetail';
import {db} from "../../../firebase";
import {collection, getDocs} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [load, setLoad] = useState(true);
    const [getProduct, setGetProduct] = useState({});
    const {id} = useParams();
 
    useEffect(()=> {
        setTimeout(()=> {
            setLoad(false);
        },2000)
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
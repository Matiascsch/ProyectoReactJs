import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemDetail from './ItemDetail';
import {db} from "../../firebase";
import {collection, getDocs, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [load, setLoad] = useState(true);
    const [getProduct, setGetProduct] = useState({});
    const {id} = useParams();
 
    useEffect(()=> {

        // const coleccionProds = collection(db, "productos")
        // const pedido = getDocs(coleccionProds)
        //     pedido
        //         .then((res)=>{
        //             const docs = res.docs;
        //             const docs_final = docs.map((doc)=>{

        //                 const prod = {... doc.data(), id: doc.id}

        //                 console.log(doc.id);
        //                 console.log(doc.data());

        //                 return prod;
        //             })

        //             setGetProduct(docs_final);
        //             setLoad(false);
        //         })
        //         .catch(e => console.error("error"))


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
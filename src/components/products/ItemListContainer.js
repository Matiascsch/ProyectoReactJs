import React from "react";
import Loading from "./Loading";
import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../firebase";
import {collection, getDocs, getDoc} from "firebase/firestore"

const ItemListContainer = () =>{

    // uses 
    const [load , setLoad] = useState(true);
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
    
    useEffect( ()=> {
        
        // const coleccionProds = collection(db, "productos")
        // const pedido = getDocs(coleccionProds)
        //     pedido
        //         .then((res)=>{
        //             const docs = res.docs;
        //             const docs_final = docs.map((doc)=>{
        //                 const prod = {...doc.data(),id: doc.id}

        //                 console.log(doc.id);
        //                 console.log(doc.data());

        //                 return prod;
        //             })
        //             setProductos(docs_final);
        //             setLoad(false);
        //         })
        //         .catch(e => console.error("error"))


        const URL = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`;

        const promise = fetch(URL);

        promise
            .then((res) => res.json())
            .then((productos) => {
                setLoad(false);
                setProductos(productos);
            })
            .catch(e => console.log("***ERROR PROMISE ItemList***" + e));

        
    },[id]);

    if (load){
        return (
            <Loading />
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
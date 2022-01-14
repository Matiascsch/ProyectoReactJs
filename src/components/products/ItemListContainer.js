import React from "react";
import Loading from "./Loading";
import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{

    // uses 
    const [load , setLoad] = useState(true);
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
    
    useEffect( ()=> {
        console.log(id)

        const URL = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`;

        const promise = fetch(URL);

        promise
            .then((res) => res.json())
            .then((productos) => {
                console.log(productos);
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
import React from "react";
import Loading from "./Loading";
import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../../firebase";
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () =>{

    // uses 
    const [load , setLoad] = useState(true);
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
    
    useEffect( ()=> {
        
        const coleccionProds =
                (id === "hombres") ? query(collection(db,"productos"), where("gender", "==", id))
                : (id === "mujeres") ? query(collection(db,"productos"), where("gender", "==", id))
                : collection(db, "productos") ;
        
        const pedido = getDocs(coleccionProds)
            pedido
            .then((res)=>{
                const docs = res.docs;
                
                const docs_final = docs.map(doc => {
                    const item = {
                        id: doc.id,
                        ...doc.data()
                    }
                    
                    return item;
                })
                setProductos(docs_final);
            })
            .catch(e => console.error(e))
        
        setTimeout(()=>{
            setLoad(false);
        },2000);

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
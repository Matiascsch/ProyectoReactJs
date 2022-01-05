import React from "react";
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

        if(id == "Mujeres"){
            const promise = fetch('https://fakestoreapi.com/products/category/jewelery');

            promise
            .then((res) => res.json())
            .then((productos) => {
                console.log(productos);
                setLoad(false);
                setProductos(productos);
            })
            .catch(e => console.log("***ERROR PROMISE ItemList***" + e));

        }else if (id == "Hombres"){
            const promise = fetch('https://fakestoreapi.com/products/category/electronics');

            promise
            .then((res) => res.json())
            .then((productos) => {
                console.log(productos);
                setLoad(false);
                setProductos(productos);
            })
            .catch(e => console.log("***ERROR PROMISE ItemList***" + e));

        }else{
            const promise = fetch('https://fakestoreapi.com/products');

            promise
            .then((res) => res.json())
            .then((productos) => {
                console.log(productos);
                setLoad(false);
                setProductos(productos);
            })
            .catch(e => console.log("***ERROR PROMISE ItemList***" + e));
        }


        
    } );

    if (load){
        return (
            <p>CARGANDO ARTICULOS</p>
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
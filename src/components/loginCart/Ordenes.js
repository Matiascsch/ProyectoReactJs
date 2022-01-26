import Loading from "../tienda/products/Loading";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Ordenes =()=>{
    const [ordenes, setOrdenes] = useState([]);
    const [load, setLoad] =  useState(true);
    
    const coleccion = collection(db, "ventas");
    
    useEffect(()=>{
        const pedido = getDocs(coleccion);
              pedido
                .then(res=>{
                    const docs = res.docs;
                    
                    const ordenes_final = docs.map((doc)=> {
                        const orden = {
                            orden_id: doc.id,
                            ...doc.data()
                        }
                        return orden;
                    })
                    setOrdenes(ordenes_final);
                    setLoad(false);
                })
                .catch(e=>console.log(e))
    },[coleccion])

    const eliminar_orden =(id)=>{
        deleteDoc(doc(coleccion, id));
        toast.info("Has Eliminado la orden: " + id)
    }

    return (
    <section id="ordenesSection">
        <h2>Tus Ordenes ({ordenes.length})</h2>

        <div className="ordenesContainer">
        {
            (load)? <Loading/> 
            :<table>
                <thead>
                    <tr>
                        <th>Nº de Orden</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>                
                    {ordenes.map((orden)=>{
                        return (
                        <tr key={orden.orden_id}>
                            <td className="ordenId">{orden.orden_id}</td>
                            <td>{orden.articulo.producto.title}</td>
                            <td>{orden.cantidad}</td>
                            <td><button className="eliminarOrden" onClick={()=> eliminar_orden(orden.orden_id)}>Eliminar</button></td>
                        </tr>
                    )})
                    }
                </tbody>
            </table>
        }
        </div>
        </section>
    )
}

export default Ordenes;
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const { Provider } = CartContext;


const ProviderCart = ({children}) => {
    const [carritoProds, setCarritoProds] = useState([]);
    const [carritoTotal, setCarritoTotal] = useState(0);
    const [carritoPrecio, setCarritoPrecio] = useState(0);

    // Agregar al Carrito
    const addToCart = (articulo) => { // func Agregar un Producto
        const {id , producto, cantidad} = articulo;
        const {title} = producto;
        const exist = carritoProds.findIndex((i)=> i.id === id)
       
        if(exist > -1){
            toast.error(`El Producto ${title} ya esta en el Carrito!`);
            console.log(carritoProds)
        }else{
            toast.success(`${cantidad} ${title} Agregado/s al Carrito!`);
            setCarritoProds([...carritoProds, articulo])
            console.log(carritoProds)
        }
        carritoTotalProds();
    }   
    
    const carritoTotalProds = () =>{  //func Cantidad de Productos en el Carrito
        setCarritoTotal(carritoProds.length);
    }

    const removeToCart = (item) => { // func Eliminar un Producto del Carrito
        setCarritoProds(carritoProds.filter(prod => prod.id !== item.id));
        console.log(`Has eliminado ${item.title}`)
    }

    const clearCart = () => { // func Vaciar el Carrito
        setCarritoProds([]);
        setCarritoTotal(0);
        console.log('Has Limpiado el Carrito')
    }
    
    // Lo que Quiero Exportar en CartContext
    const cartValues = {carritoProds, carritoTotal, carritoPrecio,  carritoTotalProds, addToCart, removeToCart,clearCart};

    return (
        <Provider value={cartValues}>
            {children}
        </Provider>
    )
}

export default ProviderCart;
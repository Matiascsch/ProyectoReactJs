import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const { Provider } = CartContext;


const ProviderCart = ({children}) => {
    const [exist , setExist] = useState();
    const [carritoProds, setCarritoProds] = useState([]);
    const [carritoPrecio, setCarritoPrecio] = useState(0);
    const [carritoTotal, setCarritoTotal] = useState(0);

    // Agregar al Carrito
    const addToCart = () => {
        toast.success(`Producto Agregado al Carrito!`);
        toast.error("El Producto ya esta en el Carrito!")
    }

    const isInCart = (item) => {
        setExist(carritoProds.includes(item));
    }

    const removeToCart = (item) => {
        setCarritoProds(carritoProds.filter(prod => prod.id === item.id));
        console.log(`Has eliminado ${item}`)
    }

    const clearCart = () => {
        setCarritoProds([]);
        console.log('Has Limpiado el Carrito')
    }
    
    // Lo que Quiero Exportar en CartContext
    const cartValues = {carritoProds, carritoTotal, carritoPrecio, addToCart, removeToCart,clearCart};

    return (
        <Provider value={cartValues}>
            {children}
        </Provider>
    )
}

export default ProviderCart;
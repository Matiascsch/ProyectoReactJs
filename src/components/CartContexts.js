import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const { Provider } = CartContext;


const ProviderCart = ({children}) => {
    const [exist, setExist] = useState(true);
    const [carritoProds, setCarritoProds] = useState([]);
    const [carritoPrecio, setCarritoPrecio] = useState(0);
    const [carritoTotal, setCarritoTotal] = useState(0);

    // Agregar al Carrito
    const addToCart = (item, cantidad) => {
        const newProduct = {
            articulo : item,
            cantidad : cantidad
        }

        isInCart(newProduct);
        if(exist === true){
            toast.error(`El Producto ${item.title} ya esta en el Carrito!`);
        }else{
            toast.success(`${cantidad} ${item.title} Agregado/s al Carrito!`);
            return setCarritoProds([...carritoProds, newProduct])
        }
    }

    console.log(carritoProds)

    const isInCart = (item) => {
        return setExist(carritoProds.find(i => i.articulo.id === item.articulo.id) ? true : false);
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
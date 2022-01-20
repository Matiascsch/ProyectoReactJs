import { useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContexts";

const Cart = () => {
    const {carritoProds, carritoPrecio, carritoTotal, carritoTotalProds,removeToCart, clearCart} = useContext(CartContext);
    
    useEffect(()=> {
        carritoTotalProds();
    }, [carritoTotalProds])

    return (
        <div className="cartContainer">
            <h2>Tu Carrito</h2>
            <div>
                {carritoProds.map((i)=> {
                    const {id, producto, cantidad} = i;
                    const {title} = producto;
                    return (
                    <div key={id}>
                        <h2>{title}</h2>
                        <p>Cantidad: {cantidad}</p>
                        <button onClick={()=> removeToCart(i)}>Boton de Eliminar.</button>
                    </div>    
                    )
                })}
            </div>
            <p>Tienes {carritoTotal} de Productos en el Carrito.</p>
            <button onClick={clearCart}>Vaciar Carrito.</button>
            <p>Total : $ {carritoPrecio}</p>
        </div>
    );
}

export default Cart;
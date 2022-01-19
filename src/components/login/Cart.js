import { useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContexts";

const Cart = () => {
    const {carritoProds, carritoPrecio, carritoTotal, carritoTotalProds,removeToCart, clearCart} = useContext(CartContext);
    
    useEffect(()=> {
        carritoTotalProds();
    })

    return (
        <div className="cartContainer">
            <h2>Tu Carrito</h2>
            <div>
                {carritoProds.map((i)=> {
                    return (
                    <div key={i.item.id}>
                    <h2>Aqui se iteran los prods. {i.item.title}</h2>
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
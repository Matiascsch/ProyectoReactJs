import { useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContexts";

const Cart = () => {
    const {carritoProds, carritoPrecio, carritoTotal, carritoTotalProds, removeToCart, clearCart, updatePriceTotal} = useContext(CartContext);

    useEffect(()=> {
        carritoTotalProds();
        updatePriceTotal();
    }, [carritoTotalProds, updatePriceTotal])

    return (
        <div className="cartContainer">
            <h2>Tu Carrito</h2>
            <div>
                {carritoProds.map((i)=> {
                    const {id, producto, cantidad} = i;
                    const {title, price, initial} = producto;
                    const finalPriceProdCart = ((price/initial)*cantidad).toFixed(2)

                    return (
                        <div key={id}>
                            <h2>{title}</h2>
                            <p>Cantidad: {cantidad}</p>
                            <p>${finalPriceProdCart}</p>
                            <button onClick={()=> removeToCart(i)}>Boton de Eliminar.</button>
                        </div>    
                    )
                })}
            </div>
            <p>Tienes {carritoTotal} de Productos en el Carrito.</p> 
            {/*corregir Numero, no me esta sumando ademas la cantidad de los productos*/}
            
            <button onClick={clearCart}>Vaciar Carrito.</button>
            
            <p>Total : $ {carritoPrecio}</p>
            {/*corregir Numero, no me esta sumando precios finales de los productos*/}
        </div>
    );
}

export default Cart;
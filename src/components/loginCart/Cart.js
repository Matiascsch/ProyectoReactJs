import { useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContexts";
import { Link } from "react-router-dom";

const Cart = () => {
    const {producto ,carritoProds, carritoPrecio, carritoTotal, carritoTotalProds, removeToCart, clearCart, updatePriceTotal, confirmBuy} = useContext(CartContext);

    useEffect(()=> {
        carritoTotalProds();
        updatePriceTotal();
    }, [carritoTotalProds, updatePriceTotal])

    return (
        <section id="cartContainer">
            <h2>Tu Carrito</h2>
            <p className="cantCart">Tienes {carritoTotal} de Productos en el Carrito.</p> 

            <div className="cartCardContainer">
                {carritoProds.map((i)=> {
                    const {id, producto, cantidad} = i;
                    const {title, price, initial, image} = producto;
                    const finalPriceProdCart = ((price/initial)*cantidad).toFixed(2)

                    return (
                        <div key={id} className="cartCard">
                            <img src={image} alt={`Imagen de ${title}`} />

                            <div className="cardContent">
                                <h2 className="cardTitle">{title}</h2>
                                <p>Cantidad: {cantidad}</p>
                                <div className="cardInfo">
                                    <p className="cardPrice">${finalPriceProdCart}</p>
                                    <p className="eliminarCard"><ion-icon name="trash-outline" onClick={()=> removeToCart(i)}></ion-icon></p>
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>

            <div className="confirmarCart">
                <p className="totalCart">Total : $ {carritoPrecio.toFixed(2)}</p>

                <div className="btnsConfirmar">
                    <button className="btnVaciarCart" onClick={clearCart}>Vaciar Carrito</button>
                    <button className="btnComprarCart" onClick={() => confirmBuy(producto)}>Comprar Carrito</button>
                </div>

                <Link to="/ordenes">
                    <p className="ordenes">Ver Mis Ordenes</p>
                </Link>
            </div>
        </section>
    );
}

export default Cart;
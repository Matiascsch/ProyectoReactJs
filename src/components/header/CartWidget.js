import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContexts";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {carritoProds, carritoTotal, carritoTotalProds} = useContext(CartContext);

    useEffect(()=>{
        carritoTotalProds();
    }, [carritoTotalProds])

    const numCarrito = <div className="numCart">
                            <p>{carritoTotal}</p>
                        </div>;
    return (
        <li className='cart' >
            <Link to="/cart"><ion-icon name="cart-outline"></ion-icon></Link>
            {(carritoProds.length !== 0)? numCarrito: <></>}
        </li>
    );
}

export default CartWidget
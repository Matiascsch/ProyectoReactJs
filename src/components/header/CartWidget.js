import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    return (
        <li className='cart' >
            <Link to="/cart"><ion-icon name="cart-outline"></ion-icon></Link>
        </li>
    );
}

export default CartWidget
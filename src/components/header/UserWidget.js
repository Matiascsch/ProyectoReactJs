import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    return (
        <li className='user'>
            <Link to="/user" >
                <ion-icon name="person-outline"></ion-icon>
            </Link>
        </li> 
    );
}

export default CartWidget
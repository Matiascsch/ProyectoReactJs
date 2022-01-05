import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <nav className="menuNavbar">
            <ul>
                <li><Link to="/">HOME</Link></li>  
                <li><Link to="/tienda/categorias/">TIENDA</Link></li>
                <li><Link to="/tienda/categorias/Hombres">Hombres</Link></li>
                <li><Link to="/tienda/categorias/Mujeres">Mujeres</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>      
            </ul>
        </nav>
    );
}

export default Links;

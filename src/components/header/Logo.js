import React from "react";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <img src="./assets/imgs/logo.png" alt="https://www.flaticon.es/icono-premium/montana_2404113?term=monta%C3%B1a&page=1&position=61&page=1&position=61&related_id=2404113&origin=search" />
            <h1>Explore</h1>
        </Link>
    );
}

export default Logo;
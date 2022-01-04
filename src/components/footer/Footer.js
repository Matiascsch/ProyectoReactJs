import React from "react";
import Copyright from "./Copyright";

const Footer = () => {

    return (
        <div className="footer">
            <footer>
                <div className="socialFooter">
                    <h4>Seguinos en Nuestras Redes</h4>
                    <ul>
                        <li><ion-icon name="logo-instagram"></ion-icon></li>
                        <li><ion-icon name="logo-facebook"></ion-icon></li> 
                        <li><ion-icon name="logo-twitter"></ion-icon></li> 
                        <li><ion-icon name="logo-whatsapp"></ion-icon></li> 
                    </ul>
                </div>

                <div className="contactFooter">
                    <h4>Déjanos tu Email para recibir Nuestro Catálogo y Ofertas</h4>
                    <div className="inputContactFooter">
                        <input type="text" placeholder="Tu Email"/>
                        <button>Enviar</button>
                    </div>
                </div>
            </footer>

            <Copyright />
        </div>
    );

}

export default Footer;
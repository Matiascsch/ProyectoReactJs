import React from "react";
import Copyright from "./Copyright";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Footer = () => {
    const {formState: { errors }, register, handleSubmit} = useForm();

    const enviarCorreo = ()=>{
        toast.success("Se ha Enviado Nuestro Catalogo con exito a su Email.")
    }

    return (
        <div className="footer">
            <footer>
                <div className="socialFooter">
                    <h4>Seguinos en Nuestras Redes</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/?hl=es"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a></li> 
                        <li><a href="https://twitter.com/home"><ion-icon name="logo-twitter"></ion-icon></a></li> 
                        <li><a href="https://www.whatsapp.com/?lang=es"><ion-icon name="logo-whatsapp"></ion-icon></a></li> 
                    </ul>
                </div>

                <div className="contactFooter">
                    <h4>Déjanos tu Email para recibir Nuestro Catálogo y Ofertas</h4>
                    <div className="inputContactFooter">
                        <form onSubmit={handleSubmit(enviarCorreo)}>
                            <input 
                                type="text" 
                                placeholder="Tu Email"
                                {...register("EmailFooter",{
                                    required: {value:true, message: "Por Favor, Ingrese Su Email"},
                                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Email Invalido"}
                                })}/>

                            <button>Enviar</button>
                            
                            <span className="errorInputFooter">{errors?.EmailFooter?.message}</span>
                        </form>
                    </div>
                </div>
            </footer>

            <Copyright />
        </div>
    );

}

export default Footer;
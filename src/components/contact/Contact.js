import { useForm } from "react-hook-form";
import background from "../mountains.jpg"

const Contacto = () => {
    const { register, handleSubmit, formState: { errors }, resetField} = useForm();

    const enviarConsulta = ()=>{
        resetField("NombreContacto")
        resetField("ApellidoContacto")
        resetField("EmailContacto")
        resetField("MensajeContacto")
    }

    return (
        <section id="contactSection" style={{ backgroundImage: `url(${background})`}}>
            <div className="formContainer">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit(enviarConsulta)} id="contactForm">

                    <div className="contactInputs">
                        <div className="input">
                            <span className="titleInput">Nombre</span>
                            <input
                                type="text"
                                placeholder="Tu Nombre"
                                {...register("NombreContacto",{
                                    required: {value: true, message: "Campo Obligatorio."}
                                })}
                            /><span className="errorInputContact">{errors?.NombreContacto?.message}</span>
                        </div>
                        <div className="input">
                            <span className="titleInput">Apellido</span>
                            <input
                                type="text"
                                placeholder="Tu Apellido"
                                {...register("ApellidoContacto",{
                                    required: {value: true, message: "Campo Obligatorio."}
                                })}
                            /><span className="errorInputContact">{errors?.ApellidoContacto?.message}</span>
                        </div>
                        <div className="input">
                            <span className="titleInput">Email</span>
                            <input
                                type="text"
                                placeholder="Tu Email"
                                {...register("EmailContacto",{
                                    required: {value: true, message: "Campo Obligatorio"},
                                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Email Invalido"}
                            })}
                            /><span className="errorInputContact">{errors?.EmailContacto?.message}</span>
                        </div>
                    </div>

                        <div className="messageContact">
                            <span className="titleInput">Mensaje</span>
                            <textarea
                                placeholder="Tu Mensaje..."
                                {...register("MensajeContacto",{
                                    maxLength: {value: 300, message: "Maximo 300 Caracteres."}
                                })}   
                            /><span className="errorInputContact">{errors?.MensajeContacto?.message}</span>
                        </div>
                </form>
                <button form="contactForm" className="btnEnviar">Enviar</button>
            </div>
        </section>
    )
}

export default Contacto;
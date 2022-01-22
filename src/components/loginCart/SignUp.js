import { toast } from "react-toastify"

const SignUp = ()=> {
    const crearCuenta = ()=> {
        toast.success("Cuenta Creada Correctamente");
    }

    return (
        <div className="signUpBx">
            <h3>Registrate</h3>
            <p>Para formar Parte de nuesta comunidad.</p>
            <div className="signUpInputs">
                <input type={"text"} placeholder="Usuario" />
                <input type={"text"} placeholder="Nombre" />
                <input type={"text"} placeholder="Apellido" />
                <input type={"text"} placeholder="Telefono" />
                <input type={"text"} placeholder="Email" />
                <input type={"password"} placeholder="Contraseña" />
                <input type={"password"} placeholder="Confirmar Contraseña" />
            </div>
            <button className="btnsignUp" onClick={crearCuenta}>Crear Cuenta</button>
        </div>
    )
}
export default SignUp;
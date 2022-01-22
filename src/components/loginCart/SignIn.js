import { toast } from "react-toastify"

const SingIn = ()=> {
    const Login = ()=> {
        toast.success("Sesion Iniciada Correctamente");
    }

    return (
        <div className="loginBx">
            <h3>Ingresar</h3>
            <p>Si ya Formas Parte de nuesta comunidad.</p>
            <div className="loginInputs">
                <input type={"text"} placeholder="Usuario" />
                <input type={"text"} placeholder="Email" />
                <input type={"password"} placeholder="Contraseña" />
            </div>
            <div className="loginForgot">
                <p>Olvide Mi Contraseña.</p>
                <p>Olvide Mi Email.</p>
            </div>
            <button className="btnLogin" onClick={Login}>Ingresar</button>
        </div>
    )
}
export default SingIn;
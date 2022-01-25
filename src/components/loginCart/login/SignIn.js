import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingIn = ()=> {
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();
    
    const login = ()=> {
        reset();
        toast.success("Has Iniciado Session Correctamente");
    }

    const reset =()=>{
        resetField("Usuario");
        resetField("Email");
        resetField("Contraseña");
    }

    return (
        <div className="loginBx">
            <h3>Ingresar</h3>
            <p>Si ya Formas Parte de nuesta comunidad.</p>
            <form className="loginInputs" onSubmit={handleSubmit(login)}>
                <input 
                    autoComplete="off"
                    type={"text"}
                    placeholder="Usuario" 
                    {...register("Usuario",{
                            required: {value: true, message: "Campo Obligatorio"}
                    })}
                />
                <span className="errorInput">{errors?.Usuario?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"text"}
                    placeholder="Email" 
                    {...register("Email",{
                            required: {value: true, message: "Campo Obligatorio"},
                            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Email Invalido"}
                    })}
                />
                <span className="errorInput">{errors?.Email?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"password"} 
                    placeholder="Contraseña" 
                    {...register("Contraseña",{
                            required: {value: true, message: "Campo Obligatorio"}
                    })}
                />
                <span className="errorInput">{errors?.Contraseña?.message}</span>
            
                <button className="btnLogin">Ingresar</button>
            </form>

            <div className="loginForgot">
                <p>Olvide Mi Contraseña.</p>
                <p>Olvide Mi Email.</p>
            </div>
            
        </div>
    )
}
export default SingIn;
import { toast } from "react-toastify"
import { useForm } from "react-hook-form";

const SignUp = ()=> {
    const { register, handleSubmit, formState: { errors }, resetField, getValues } = useForm();

    const crearCuenta = ()=> {
        reset();
        toast.success("Has Creado tu Cuenta Correctamente");
    }
    const reset =()=>{
        resetField("Usuario");
        resetField("Nombre");
        resetField("Email");
        resetField("Telefono");
        resetField("Contraseña");
        resetField("ConfirmarContraseña");
    }

    const password = getValues("Contraseña");
    const confirmPassword = getValues("ConfirmarContraseña")

    return (
        <div className="signUpBx">
            <h3>Registrate</h3>
            <p>Para formar Parte de nuesta comunidad.</p>
            <form className="signUpInputs" onSubmit={handleSubmit(crearCuenta)}>
                <input 
                    autoComplete="off"
                    type={"text"}
                    placeholder="Usuario" 
                    {...register("Usuario",{
                            required: {value: true, message: "Campo Obligatorio"},
                            minLength: {value: 8, message: "El Usuario debe tener por lo menos 8 Caracteres."}
                    })}/>
                <span className="errorInput">{errors?.Usuario?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"text"}
                    placeholder="Nombre Completo" 
                    {...register("Nombre",{
                        required: {value: true, message: "Campo Obligatorio"}
                    })}/>
                <span className="errorInput">{errors?.Nombre?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"text"}
                    placeholder="Telefono" 
                    {...register("Telefono",{
                            required: {value: true, message: "Campo Obligatorio"}
                    })}/>
                <span className="errorInput">{errors?.Telefono?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"text"}
                    placeholder="Email" 
                    {...register("Email",{
                            required: {value: true, message: "Campo Obligatorio"},
                            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Email Invalido"}
                    })}/>
                <span className="errorInput">{errors?.Email?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"password"}
                    placeholder="Contraseña" 
                    {...register("Contraseña",{
                            required: {value: true, message: "Campo Obligatorio"},
                            minLength: {value: 10, message: "La contraseña debe tener por lo menos 10 Caracteres."}
                    })}/>
                <span className="errorInput">{errors?.Contraseña?.message}</span>
                
                <input 
                    autoComplete="off"
                    type={"password"}
                    placeholder="Confirmar Contraseña" 
                    {...register("ConfirmarContraseña",{
                            required: {value: true, message: "Campo Obligatorio"},
                            pattern: {value: (password === confirmPassword), message: "Las Contraseñas No Coinciden."}
                    })}/>
                <span className="errorInput">{errors?.ConfirmarContraseña?.message}</span>
                
                <button className="btnsignUp">Crear Cuenta</button>
            </form>
        </div>
    )
}
export default SignUp;
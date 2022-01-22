import SingIn from "./SignIn";
import SingUp from "./SignUp";

const UserLogin = () => {
    return(
        <section id="loginSection">
            <h2>Sumate a Nuestra Comunidad</h2>
            <div className="containerLogin">
                <SingIn />
                <SingUp />
            </div>
        </section>
    )
}

export default UserLogin;
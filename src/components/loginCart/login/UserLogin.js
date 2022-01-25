import SingIn from "./SignIn";
import SingUp from "./SignUp";
import background from "../../../../src/components/mountains.jpg"

const UserLogin = () => {
    return(
        <section id="loginSection" style={{ backgroundImage: `url(${background})`}}>
            <h2>Sumate a Nuestra Comunidad</h2>
            <div className="containerLogin">
                <SingIn />
                <SingUp />
            </div>
        </section>
    )
}

export default UserLogin;
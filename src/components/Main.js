import { Routes , Route } from "react-router-dom"

import UserLogin from "./login/UserLogin";
import Cart from "./login/Cart";
import Home from "./home/Home";
import Tienda from "./tienda/Tienda";
import ItemDetailContainer from './products/ItemDetailContainer';

const Main = () => {
    return(
        <main>
            <Routes>

                <Route path="/cart" element={<Cart/>} />
                <Route path="/user" element={<UserLogin />} />

                <Route path="/" element={<Home />} />
                <Route path="/tienda/categorias/" element={<Tienda />} />
                <Route path="/tienda/categorias/:id" element={<Tienda />} />
                <Route path="/tienda/detalles/:id" element={<ItemDetailContainer />} />

            </Routes>
        </main>
    )
}

export default Main;
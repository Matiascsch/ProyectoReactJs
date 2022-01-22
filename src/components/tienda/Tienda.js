import React from "react"
import ItemListContainer from "./products/ItemListContainer";
import AsideSearch from "./AsideSearch";

const Tienda = () => {
    return (
        <section id="tiendaSection">
            <h1>Pagina de TIENDA</h1>
            <AsideSearch />
            <ItemListContainer />
        </section>
    )
}

export default Tienda;
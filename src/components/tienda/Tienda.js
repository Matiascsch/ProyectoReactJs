import React from "react"
import ItemListContainer from "./products/ItemListContainer";
import Search from "./filters/Search";

const Tienda = () => {
    return (
        <section id="tiendaSection">
            <Search />
            <ItemListContainer />
        </section>
    )
}

export default Tienda;
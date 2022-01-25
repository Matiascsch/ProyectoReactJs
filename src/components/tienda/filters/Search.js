import FilterInput from "./FilterInput";

const Search = () =>{
    return (
        <div className="busquedaContainer">
            <h3>Busqueda Personalizada</h3>
            <div className="busqueda">
                <div className="busquedaPersonal">
                    <h5>Por Categoria</h5>
                    <div className="personalInputsContainer">
                        <FilterInput name="Camperas" link="camperas"/>
                        <FilterInput name="Buzos" link="buzos"/>
                        <FilterInput name="Calzado" link="botas"/>
                    </div>
                </div>
                <div className="busquedaPersonal">
                    <h5>Por Género</h5>
                    <div className="personalInputsContainer">
                        <FilterInput name="Mujeres" link="mujeres"/>
                        <FilterInput name="Hombres" link="hombres"/>
                    </div>
                </div>
                <div className="busquedaPersonal">
                    <h5>Por Marca</h5>
                    <div className="personalInputsContainer">
                        <FilterInput name="The North Face" link="north-face"/>
                        <FilterInput name="Montagne" link="montagne"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
import Category from "./Category";

const ContentHome = () => {
    
    return (
        <div className="homeMain">
            <h2>Categorias</h2>
            <div className="categoryContainer">
                <Category image="/assets/imgs/mountains.jpg" categoryTitle="North Face" categoryContent="Los Mejores Productos de la marca North Face, Edicion Invierno 2022"/>

                <Category image="/assets/imgs/mountains.jpg" categoryTitle="Montagne" categoryContent="Los Mejores Productos de la marca Montagne, Edicion Invierno 2022"/>

                <Category image="/assets/imgs/mountains.jpg" categoryTitle="Hombres" categoryContent="Toda la Coleccion de Hombres de Todas las Marcas"/>

                <Category image="/assets/imgs/mountains.jpg" categoryTitle="Mujeres" categoryContent="Toda la Coleccion de Mujeres de Todas las Marcas"/>
            </div>
        </div>
    )
}

export default ContentHome;
import Category from "./Category";

const ContentHome = () => {
    
    return (
        <div className="homeMain">
            <h2>Categorias</h2>
            <div className="categoryContainer">
                <Category image="/assets/imgs/north-face.jpg" categoryTitle="North Face" categoryContent="Los Mejores Productos de la marca North Face, Edicion Invierno 2022" link=""/>

                <Category image="/assets/imgs/montanista.jpg" categoryTitle="Montagne" categoryContent="Los Mejores Productos de la marca Montagne, Edicion Invierno 2022" link=""/>

                <Category image="/assets/imgs/hombrescat.jpg" categoryTitle="Hombres" categoryContent="Toda la Coleccion de Hombres de Todas las Marcas" link="hombres"/>

                <Category image="/assets/imgs/mujerescat.jpg" categoryTitle="Mujeres" categoryContent="Toda la Coleccion de Mujeres de Todas las Marcas" link="mujeres"/>
            </div>
        </div>
    )
}

export default ContentHome;
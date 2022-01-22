import Category from "./Category";

const ContentHome = () => {
    
    return (
        <section id="homeSection">
            <h2>Categorias</h2>
            <div className="categoryContainer">
                <Category image="/assets/imgs/mountains.jpg" categoryTitle="North Face" categoryContent="Los Mejores Productos de la marca North Face, Edicion Invierno 2022" link=""/>

                <Category image="/assets/imgs/mountains.jpg" categoryTitle="Montagne" categoryContent="Los Mejores Productos de la marca Montagne, Edicion Invierno 2022" link=""/>

                <Category image="/assets/imgs/mountains.jpg" categoryTitle="Hombres" categoryContent="Toda la Coleccion de Hombres de Todas las Marcas" link="hombres"/>

                <Category image="/assets/imgs/mountains.jpg" categoryTitle="Mujeres" categoryContent="Toda la Coleccion de Mujeres de Todas las Marcas" link="mujeres"/>
            </div>
        </section>
    )
}

export default ContentHome;
import React from "react";
import ParallaxHome from "./content/ParallaxHome";
import ContentHome from "./content/ContentHome";
import GridHome from "./content/GridHome";

const Home = () =>  {

    return (
        <section id="homeSection">
            <ParallaxHome />
            <ContentHome />
            <GridHome/>
        </section>
    )

}

export default Home;
import React from "react";
import ParallaxHome from "./content/ParallaxHome";
import ContentHome from "./content/ContentHome";

const Home = () =>  {

    return (
        <section id="homeSection">
            <ParallaxHome />
            <ContentHome />
        </section>
    )

}

export default Home;
import React from "react";
import ParallaxHome from "./content/ParallaxHome";
import ContentHome from "./content/ContentHome";

const Home = () =>  {

    return (
        <div id="homeContainer">
            <ParallaxHome />
            <ContentHome />
        </div>
    )

}

export default Home;
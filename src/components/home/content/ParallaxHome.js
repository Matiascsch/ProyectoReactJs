import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ParallaxHome = () => {
    const parallaxRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(()=>{
        gsap.to(
            parallaxRef.current.querySelector("#background"), {
            scrollTrigger : {
                scrub : 1
            },
            scale : 1.5
        })
        
        gsap.to(
            parallaxRef.current.querySelector("#bosque"), {
            scrollTrigger : {
                scrub : 1
            },
            x : 200
        })
        
        gsap.to(
            parallaxRef.current.querySelector("#backpacker"), {
            scrollTrigger : {
                scrub : 1
            },
            y : 100
        })
        
        gsap.to(
            parallaxRef.current.querySelector("#textoParallax"), {
            scrollTrigger : {
                scrub : 1
            },
            y : 100
        })
    })

    return (
        <div className="ParallaxHome" ref={parallaxRef}>
            <img src="assets/imgs/mountains.jpg" alt="Imagen del Parallax1" id="background" />
                <h2 id="textoParallax">Explore</h2>
            <img src="assets/imgs/bosque1.png" alt="Imagen del Parallax2" id="bosque" />
            <img src="assets/imgs/backpacker1.png" alt="Imagen del Parallax3" id="backpacker" />
        </div>
    )
}

export default ParallaxHome;
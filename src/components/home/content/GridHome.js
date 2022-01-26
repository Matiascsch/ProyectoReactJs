const GridHome = () =>{
    return(
        <div className="gridHome">
            <div className="containerLayout">
                <div className="boxLayout area1">
                    <div className="contentLayout">
                        <img src="/assets/imgs/biglogo.png" alt="logo"/>
                        <p>Articulos de Alta Montaña.</p>
                    </div>
                </div>
                <div className="boxLayout area2">
                    <div className="contentLayout">
                        <img src="/assets/imgs/camping.png" alt="camping"/>
                        <p>Articulos de Camping.</p>
                    </div>
                </div>
                <div className="boxLayout area3">
                    <div className="contentLayout">
                        <img src="/assets/imgs/trekking.png" alt="trekking"/>
                        <p>Las Mejores Prendas para Excursiones</p>
                    </div>
                </div>
                <div className="boxLayout area4">
                    <div className="contentLayout">
                        <img src="/assets/imgs/compras.png" alt="compras"/>
                        <p>Puedes Añadir todo lo que quieras a tu carrito de Compras.</p>
                    </div>
                </div>
                <div className="boxLayout area5">
                    <div className="contentLayout">
                        <img src="/assets/imgs/envio-gratis.png" alt="envio"/>
                        <p>Envios Gratis a Todo el Pais.</p>
                    </div>
                </div>
                <div className="boxLayout area6">
                    <div className="contentLayout">
                        <img src="/assets/imgs/pago.png" alt="metodo de pago"/>
                        <p>Multiples Medios de Pago.</p>
                    </div>
                </div>
                <div className="boxLayout area7">
                    <div className="contentLayout">
                        <img src="/assets/imgs/garantia.png" alt="garantia"/>
                        <p>Garantia de 6 Meses incluida.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridHome;
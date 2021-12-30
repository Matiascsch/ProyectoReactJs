import NavBar from './components/header/NavBar'
import ItemListContainer from './components/products/ItemListContainer';
import Footer from './components/footer/Footer';
import ItemDetailContainer from './components/products/ItemDetailContainer'

const App = () => {
    const productos = [
        {
            id: 1,
            title: "campera Montagne",
            price: 200,
            imgURL: "x",
            color: "Rojo",
            description: "Campera de frio, hecha para Alpinismo y ski, contiene material para contener el calor",
            stock: 12,
            off: 10
        },
        {
            id: 2,
            title: "campera North Face",
            price: 250,
            imgURL: "xx",
            color: "Negro",
            description: "Campera de frio, hecha para Alpinismo y ski, contiene material para contener el calor",
            stock: 17,
            off: 18
        },
        {
            id: 3,
            title: "campera Salomon",
            price: 190,
            imgURL: "xx",
            color: "Plateada",
            description: "Campera de frio, hecha para Alpinismo y ski, contiene material para contener el calor",
            stock: 20,
            off: null
        }
    ];

    return (
    <>
        <NavBar />

        <ItemListContainer name="Matias" greeting="Bienvenido!!" listaProductos={productos}/>

        <ItemDetailContainer listaProductos={productos}/>

        <Footer />
    </>
)}

export default App;
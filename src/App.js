import NavBar from './components/header/NavBar'
import ItemListContainer from './components/products/ItemListContainer';
import Footer from './components/footer/Footer';

const App = () => {
    return (
    <>
        <NavBar />

        <ItemListContainer name="Matias" greeting="Bienvenido!!"/>

        <Footer />
    </>
)}

export default App;
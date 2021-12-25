import NavBar from './components/header/NavBar'
import Saludo from './components/products/ItemListContainer';

const App = () => {
    return (
    <>
        <NavBar />

        <Saludo name="Matias" greeting="Bienvenido!!"/>
    </>
)}

export default App;
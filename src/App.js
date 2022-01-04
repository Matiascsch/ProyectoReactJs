import { BrowserRouter } from 'react-router-dom'; 
import NavBar from './components/header/NavBar';
import Main from './components/Main';
import Footer from './components/footer/Footer';

const App = () => {

    return (
    <BrowserRouter>

        <NavBar />

            <Main />

        <Footer />
        
    </BrowserRouter>
    );
};

export default App;
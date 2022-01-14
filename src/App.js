import { BrowserRouter } from 'react-router-dom'; 
import ProviderCart from './components/CartContexts';
import NavBar from './components/header/NavBar';
import Main from './components/Main';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <ProviderCart>

            <BrowserRouter>
                <NavBar />
                    <ToastContainer autoClose={2000}/>
                    <Main />
                <Footer />
            </BrowserRouter>
            
        </ProviderCart>
    );
};

export default App;
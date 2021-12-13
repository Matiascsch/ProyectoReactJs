import React from 'react';
import '../../main.css';

const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <img src="#" alt="x" />
                <h1>Explore</h1>
                
                <nav className="menuNavbar">
                    <ul>
                        <li><a href="#">HOME</a></li>  
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Hombres</a></li>
                        <li><a href="#">Mujeres</a></li>
                        <li><a href="#">Niños</a></li>      
                    </ul>
                </nav>
            </div>
            

            <div className="userLog">
                <ul className='profile'>
                    <li className='user'><ion-icon name="person-outline"></ion-icon></li> 
                    <li className='cart'><ion-icon name="cart-outline"></ion-icon></li>
                </ul>
                <button className='signin'>Sign In</button>
                <button className='signup'>Sign Up</button>
            </div>
        </header>
    );
}

export default NavBar;
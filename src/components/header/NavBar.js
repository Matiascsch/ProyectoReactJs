import React from 'react';

import Logo from './Logo';
import Profile from './Profile';
import Links from './Links';
import '../../main.css';

const NavBar = () => {
    // const [burger, setBurger] = useState(true);

    return (
        <header>
            <div className="logo">
                    <Logo />
                <Links />
            </div>

            <Profile />
        </header>
    );
}

export default NavBar;
import React from "react";
import CartWidget from "./CartWidget";

const Profile = () => {
    return (
        <div className="userLog">
            <ul className='profile'>
                <li className='user'><ion-icon name="person-outline"></ion-icon></li> 

                <CartWidget />
            </ul>
            <button className='signin'>Sign In</button>
            <button className='signup'>Sign Up</button>
        </div>
    );
}

export default Profile; 
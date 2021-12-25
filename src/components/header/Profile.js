import React from "react";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";

const Profile = () => {
    return (
        <div className="userLog">
            <ul className='profile'>
                <UserWidget /> 

                <CartWidget />
            </ul>
            <button className='signin'>Sign In</button>
            <button className='signup'>Sign Up</button>
        </div>
    );
}

export default Profile; 
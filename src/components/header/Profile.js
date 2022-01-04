import React from "react";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";

const Profile = () => {
    return (
        <div className="userLog">
            <button className='signin'>Sign In</button>
            <ul className='profile'>
                <UserWidget /> 

                <CartWidget />
            </ul>
        </div>
    );
}

export default Profile; 
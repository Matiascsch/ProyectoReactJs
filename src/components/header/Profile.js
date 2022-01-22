import React from "react";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="userLog">
            <Link to="/user">
                <button className='signin'>Sign In</button>
            </Link>
            <ul className='profile'>
                <UserWidget /> 

                <CartWidget />
            </ul>
        </div>
    );
}

export default Profile; 
import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../../utilities/CustomLink';
import '../../App.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth);
    const logoutBtn = () => {
        signOut(auth).then(()=>{})
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <CustomLink to="/">Shop</CustomLink>
                <CustomLink to="/order">Order Review</CustomLink>
                <CustomLink to="/inventory">Manage Inventory</CustomLink>
                {
                    user ?
                    <button onClick={logoutBtn} className='text-white'><span className='hover:text-orange-500'>Login Out</span></button>
                    :
                    <>
                    <CustomLink to="/login">Login</CustomLink>
                    <CustomLink to="/register">Register</CustomLink>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;
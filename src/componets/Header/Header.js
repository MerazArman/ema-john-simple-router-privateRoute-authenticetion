import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo  from '../../images/logo.png';
import './Header.css';
const Header = () => {
    const [loggedUser, setLoggedUer] = useContext(UserContext)
    return (
        <div  className='header' >
            <img  src={logo} alt=""/>
            <nav>
                <Link to ="/shop">Shop</Link>
                <Link to ="/review">Order Review</Link>
                <Link to ="/manage"> Order Manage</Link>
                <button onClick={()=> setLoggedUer({})}> sign out</button>
            </nav>
        </div>
    );
};

export default Header;
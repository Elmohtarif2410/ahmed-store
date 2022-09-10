import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons"

import Logo from  "../assets/images/logo.png";


const Header = () => {
    return ( 
        <header>
            <div className="container">
                <Link className="brand" to='/'>
                    <img src={Logo} />
                </Link>
                <nav>
                    <div className="toggler-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <ul className="links">
                        <li>
                            <NavLink to='/'>store</NavLink>
                        </li>
                        <li>
                            <NavLink to='/prodacts'>prodacts</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>login</NavLink>
                        </li>
                    </ul>

                    <div className="cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </nav>  
            </div>
        </header>
    );
}

export default Header;
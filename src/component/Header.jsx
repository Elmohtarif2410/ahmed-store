// import main packges 
import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons"

// import files
import Logo from  "../assets/images/logo.png";

// import contexts 
import { ContextAdmin } from './../context/admin-context';

const Header = (props) => {

    const {logged} = useContext(ContextAdmin);

    return ( 
        <header>

                {/* <Link className="brand" to='/'><img src={Logo} /></Link>
                <nav>
                    <div className="toggler-icon open">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <ul className="links">
                        <li>
                            <NavLink to='/'>store</NavLink>
                        </li>
                        <li>
                            <NavLink to='/prodacts'>prodacts</NavLink>
                        </li>
                        {
                            (logged === true) ? (
                                
                                <li>
                                    <NavLink to='/dashboard'>dashboard</NavLink>
                                </li>

                            ) : (
                                <li>
                                    <NavLink to='/login'>login</NavLink>
                                </li>
                            )
                        }
                        
                    </ul>

                    <div className="cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </nav> */}

                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to='/'><img src={Logo} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header_navbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="header_navbar">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to='/'>store</NavLink>
                                <NavLink className="nav-link" to='/prodacts'>prodacts</NavLink>
                                {
                                    (logged === true) ? (
                                        
                                        <li>
                                            <NavLink className="nav-link" to='/dashboard'>dashboard</NavLink>
                                        </li>

                                    ) : (
                                        <li>
                                            <NavLink className="nav-link" to='/login'>login</NavLink>
                                        </li>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </nav>
        </header>
    );
}

export default Header;
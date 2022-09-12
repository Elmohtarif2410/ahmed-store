// import main packges 
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// import contexts 
import { ContextAdmin } from '../context/admin-context';

const AdminSection = (props) => {

    const {logoutHandel} = useContext(ContextAdmin);

    return ( 
        <section className='admin-section'>
            <h1 className='heading-page'>admin dashbord</h1>
            <ul className="options">
                    <li>
                        <NavLink to="prodacts">prodacts option</NavLink>
                    </li>
                    <li>
                        <NavLink to="categories">categories option</NavLink>
                    </li>
                    <li onClick={logoutHandel}>
                        logout 
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="ms-2"/>
                    </li>
            </ul>
        </section>
    );
}



export default AdminSection;
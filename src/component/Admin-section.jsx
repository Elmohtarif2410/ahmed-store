import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const AdminSection = (props) => {
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
                    <li onClick={props.logoutHandel}>
                        logout 
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </li>
            </ul>
        </section>
    );
}



export default AdminSection;
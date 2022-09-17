// import main packges 
import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faP, faC } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    return (  
        <section className='admin-page'>
            <aside>
                <h3>options</h3>
                <ul className="options">
                    <li>
                        <NavLink to="/dashboard">
                            <FontAwesomeIcon icon={faChartLine} />
                            <span>dashbord</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="prodacts">
                            <FontAwesomeIcon icon={faP} />
                            <span>prodacts option</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="categories">
                            <FontAwesomeIcon icon={faC} />
                            <span>categories option</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
            <article>
                <Outlet />
            </article>
        </section>
    );
}

export default AdminPage;
import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

const AdminPage = () => {
    return (  
        <section className='admin-page'>
            <slide>
                <h3>options</h3>
                <ul className="options">
                    <li>
                        <NavLink to="/dashboard">dashbord</NavLink>
                    </li>
                    <li>
                        <NavLink to="prodacts">prodacts option</NavLink>
                    </li>
                    <li>
                        <NavLink to="categories">categories option</NavLink>
                    </li>
                </ul>
            </slide>
            <article>
                <Outlet />
            </article>
        </section>
    );
}

export default AdminPage;
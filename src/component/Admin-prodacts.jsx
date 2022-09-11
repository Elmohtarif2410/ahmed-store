import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminProdacts = (props) => {

    const {prodacts} = props;

    const prodactItem = prodacts.map( (prodact) => {
        return (
            <tr>
                <th>{prodact.id}</th>
                <td className='w-50'>{prodact.title}</td>
                <td>{prodact.price}</td>
                <td className='buttons'>
                    <button className='remove-button'>remove</button>
                    <button className='edit-button'>edit</button>
                    <NavLink to={"/prodacts/" + prodact.id} className='view-button'>view</NavLink>
                </td>
            </tr>
        )
    })


    return ( 
        <section className='admin-prodacts'>
            <h1 className='heading-page'>prodacts</h1>
            <NavLink to="add-prodact" className="add-prodact">add prodact</NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                    {prodactItem}
                </tbody>
            </table>
        </section>
    );
}

export default AdminProdacts;
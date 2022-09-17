// import main packges 
import React, {useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// import contexts 
import { ContextCategoreis } from "../context/categoreis-context";
import { ContextProdacts } from "../context/prodacts-context";

const AdminCategories = () => {

    const {categoreis, adminRemoveCategory} = useContext(ContextCategoreis);

    const {prodacts} = useContext(ContextProdacts);

    // category prodacts filtering
    const prodactsCategory = (catName) => {
        const prodactsCategory = prodacts.filter( (prodact) => (
            prodact.category == catName
        ))

        return prodactsCategory.length
    }

    return ( 
        <section className='admin-categories'>
            <h1 className='heading-page'>categories</h1>
            <NavLink to="add-category" className="add-category">add categories</NavLink>
            <table className="table">
            <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>prodacts length</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoreis.map( (category, index) => {
                            return (
                                <tr key={category}>
                                    <th>{index + 1}</th>
                                    <td>{category}</td>
                                    <td>{prodactsCategory(category)}</td>
                                    <td className='buttons'>
                                        <button className='remove-button' onClick={ () => adminRemoveCategory(category)}>remove</button>
                                        <NavLink className='edit-button' to={"edit-category/" + category}>edit</NavLink>
                                        <NavLink to={"/prodacts/category/" + category} className='view-button'>view</NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    );
}

export default AdminCategories;
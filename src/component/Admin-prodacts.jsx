// import main packges 
import React, {useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// import contexts 
import { ContextProdacts } from './../context/prodacts-context';

const AdminProdacts = (props) => {

    const redirect = useNavigate();

    const {prodacts, adminRemoveProdact} = useContext(ContextProdacts);

    const {setTitle, setCategory, setPrice, setImage, setDescription} = useContext(ContextProdacts);

    const clickEditButton = (prodactClicked) => {

        // set inputs faild values by prodact information

        setTitle(prodactClicked.title);
        setCategory(prodactClicked.category);
        setPrice(prodactClicked.price);
        setImage(prodactClicked.image);
        setDescription(prodactClicked.description);

        // redirect to form edit
        redirect("edit-prodact/" + prodactClicked.id);

    }
    
    return ( 
        <section className='admin-prodacts'>
            <h1 className='heading-page'>prodacts</h1>
            <NavLink to="add-prodact" className="add-prodact">add prodact</NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>category</th>
                        <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        prodacts.map( (prodact) => {
                            return (
                                <tr key={prodact.id}>
                                    <th>{prodact.id}</th>
                                    <td className='w-50'>{prodact.title}</td>
                                    <td>{prodact.category}</td>
                                    <td className='buttons'>
                                        <button className='remove-button' onClick={() => adminRemoveProdact(prodact)}>remove</button>
                                        <button className='edit-button' onClick={ () => clickEditButton(prodact)}>edit</button>
                                        <NavLink to={"/prodacts/" + prodact.id} className='view-button'>view</NavLink>
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

export default AdminProdacts;
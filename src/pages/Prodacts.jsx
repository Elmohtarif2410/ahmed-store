import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import FilterProdacts from '../component/Filter-prodacts';
import ProdactsSection from '../component/Prodacts-section';

const Prodacts = (props) => {

    const [prodacts, setProdacts] = useState([]);

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products").then(
            (api) => setProdacts(api.data)
        )

    }, [])

    const filterHandel = (categoryCliked) => {
        
        const prodactFiltering = props.prodacts.filter( (prod) => {
            return prod.category === categoryCliked
        })

        setProdacts(prodactFiltering);
    }

    const allFilter = () => {

        setProdacts(props.prodacts);
    }

    return ( 
        <>
            <h1 className="heading-page">Prodacts</h1>
            <FilterProdacts
                    categoreis     = {props.categoreis}
                    filterHandel   = {filterHandel} 
                    allFilter      = {allFilter}
            />
            <ProdactsSection prodacts   = {prodacts}/>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mb-5">
                    <li className="page-item">
                        <Link className="page-link" to="/prodacts" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="/prodacts">1</Link></li>
                    <li className="page-item">
                        <Link className="page-link" to="/prodacts" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Prodacts;
// import main packges 
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

// import component
import FilterProdacts from '../component/Filter-prodacts';
import ProdactsSection from '../component/Prodacts-section';

// import contexts 
import { ContextProdacts } from '../context/prodacts-context';

const Prodacts = (props) => {

    const prodactsContext = useContext(ContextProdacts).prodacts;
    const [prodacts, setProdacts] = useState([]);

    useEffect(() => {

        setProdacts(prodactsContext)    

    }, [prodactsContext])

    const filterHandel = (categoryCliked) => {
        
        const prodactFiltering = prodactsContext.filter( (prod) => {
            return prod.category === categoryCliked
        })

        setProdacts(prodactFiltering);
    }

    const allFilter = () => {

        setProdacts(prodactsContext);
    }

    return ( 
        <>
            <h1 className="heading-page">Prodacts</h1>
            <FilterProdacts
                    filterHandel   = {filterHandel} 
                    allFilter      = {allFilter}
            />
            <ProdactsSection prodacts = {prodacts}/>
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
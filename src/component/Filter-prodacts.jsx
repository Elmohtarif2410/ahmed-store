// import main packges 
import React, { useContext } from 'react';

// import contexts 
import { ContextCategoreis } from '../context/categoreis-context';

const FilterProdacts = (props) => {

    const categoreis = useContext(ContextCategoreis).categoreis;

    const filters = categoreis.map( (category) => {
        return <li key={category} onClick={ () => props.filterHandel(category)}>{category}</li>
    })


    return (  
        <section className="filter">
            <div className="container">
                <h2>filters</h2>
                <ul className='filters'>
                    <li onClick={props.allFilter}>All</li>
                    {filters}
                </ul>
            </div>
        </section>
    );
}

export default FilterProdacts;
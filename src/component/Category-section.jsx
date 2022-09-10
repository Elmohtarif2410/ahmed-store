import React from 'react';
import { Link } from "react-router-dom";

import ProdactSection from './Prodact-section';

const CategorySection = (props) => {

    const prodacts = props.prodacts;
    const categoryName = props.category;
    let prodactsCategory = prodacts.filter( (prodact) => {
        return prodact.category === categoryName
    });

    prodactsCategory.length = 4;

    const prodact = prodactsCategory.map( (prod) => {
        return (
            <ProdactSection key={prod.id} prodact = {prod} /> 
        )
    });
    
    return (  
        <section className="category">
            <div className="container">
                <h2>{categoryName}</h2>
                <div className="prodacts">
                    {prodact}
                </div>
                <Link className='more' to={"/prodacts/category/" + categoryName}>view more</Link>
            </div>
        </section>
    );
}

export default CategorySection;

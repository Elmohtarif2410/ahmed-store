import React from 'react';
import { useParams } from 'react-router-dom';

import ProdactsSection from '../component/Prodacts-section';

const CategoryPage = (props) => {

    const categoryName = useParams().name;

    const prodactsCat = props.prodacts.filter( (prod) => {
        return prod.category === categoryName;
    });

    return (  
        <>
            <h1 className='heading-page'>{categoryName}</h1>
            <ProdactsSection prodacts = {prodactsCat} />
        </>
    );
}

export default CategoryPage;
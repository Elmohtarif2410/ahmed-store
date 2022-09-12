// import main packges 
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// import component
import ProdactsSection from '../component/Prodacts-section';

// import context 
import { ContextProdacts } from '../context/prodacts-context';

const CategoryPage = (props) => {

    const {prodacts} = useContext(ContextProdacts);

    const categoryName = useParams().name;

    const prodactsCategory = prodacts.filter( (prod) => {
        return prod.category === categoryName;
    });

    return (  
        <>
            <h1 className='heading-page'>{categoryName}</h1>
            <ProdactsSection prodacts = {prodactsCategory} />
        </>
    );
}

export default CategoryPage;
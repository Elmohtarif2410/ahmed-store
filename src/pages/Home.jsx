// import main packges 
import React, { useContext } from 'react';

// import component
import Landing from '../component/Landing';
import CategorySection from '../component/Category-section';

// import contexts 
import { ContextCategoreis } from "../context/categoreis-context";

const Home = (props) => {

    const {categoreis} = useContext(ContextCategoreis);

    const categorySection = categoreis.map( (category) => {
        return (
            <CategorySection key={category} category = {category} />
        )
    })


    return ( 
        <>
            <Landing />
            {categorySection}
        </>
    );
}

export default Home;
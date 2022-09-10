// import main packges 
import React from 'react';

// import component
import Landing from '../component/Landing';
import CategorySection from '../component/Category-section';

const Home = (props) => {

    const categoreis = props.categoreis;

    const categorySection = categoreis.map( (category) => {
        return (
            <CategorySection key={category} category = {category} prodacts ={props.prodacts} />
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
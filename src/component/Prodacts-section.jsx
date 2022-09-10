import React from 'react';

import ProdactSection from './Prodact-section';


const ProdactsSection = (props) => {

    const prodacts = props.prodacts;

    const prodact = prodacts.map( (prod) => {
        return <ProdactSection key={prod.id} prodact = {prod} />
    })

    return (  
        <section className="prodacts-prodacts">
            <div className="container">
                {prodact}
            </div>
        </section>
    );
}

export default ProdactsSection;
// import main packges 
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

// import component
import RateProdact from '../component/Rate-prodact';

// import context 
import { ContextProdacts } from '../context/prodacts-context';

const ProdactPage = (props) => {

    const {prodacts} = useContext(ContextProdacts);

    const prodactId = useParams().id;

    const prodact = prodacts.filter( (prod) => {
        return prod.id == prodactId
    })[0];

    return (  
        <>
            <h1 className='heading-page'>{prodact.title}</h1>
            <section className="information">
                <div className="container">
                    <div className="content">
                        <div className="propirty cat">
                            <h3>category</h3>
                            <p>{prodact.category}</p>
                        </div>
                        <div className="rate">
                            <RateProdact prodact = {prodact}/>
                        </div>
                        <div className="propirty">
                            <h3 className='mb-2'>description</h3>
                            <p>{prodact.description}</p>
                        </div>
                        <div className="propirty price">
                            <h3>price</h3>
                            <p>{prodact.price}</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={prodact.image} alt={prodact.title} title={prodact.title} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProdactPage;
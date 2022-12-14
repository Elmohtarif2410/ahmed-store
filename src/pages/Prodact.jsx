// import main packges 
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// import component
import RateProdact from '../component/Rate-prodact';

const ProdactPage = (props) => {

    const axios = require("axios")

    const prodactId = useParams().id;

    const [prodact, setProdact] = useState({
        title: "", 
        category: "",
        price: "", 
        image: "",
        description: "",
        rating: {
            rate: 0,
            count: 0
        }
    });

    
    useEffect( () => {

        axios.get("https://fakestoreapi.com/products/" + prodactId).then(
            api => setProdact(api.data)
        )
    }, [])

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
                        <RateProdact prodact = {prodact}/>
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
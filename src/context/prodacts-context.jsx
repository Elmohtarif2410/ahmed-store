import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ContextProdacts = React.createContext();

const ProdactsContext = (props) => {

    const axios = require('axios');
    // const redirect = useNavigate();

    const [prodacts, setProdacts] = useState([]);

    useEffect( () => {
        
        axios.get("https://fakestoreapi.com/products").then(
            (api) => setProdacts(api.data)
        )

    }, []);

    const adminRemoveProdact = (prodactRemove) => {

        const prodactsclone = prodacts;

        const prodactsAfterRemove = prodactsclone.filter( (prod) => {

                return prod !== prodactRemove;
            }
        )

        setProdacts(prodactsAfterRemove);

        // call back end server
        axios.delete("https://fakestoreapi.com/products/" + prodactRemove.id);
    }

    return (  
        <ContextProdacts.Provider value={{prodacts, adminRemoveProdact}}>
            {props.children}
        </ContextProdacts.Provider>
    );
}

export default ProdactsContext;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ContextCategoreis = React.createContext();

const CategoreisContext = (props) => {

    const axios = require('axios');
    // const redirect = useNavigate();

    const [categoreis, setCategoreis] = useState([]);

    useEffect( () => {
        axios.get("https://fakestoreapi.com/products/categories").then(
            (api) => setCategoreis(api.data)
        )
    }, []);

    return (  
        <ContextCategoreis.Provider value={{categoreis}}>
            {props.children}
        </ContextCategoreis.Provider>
    );
}

export default CategoreisContext;
// import main packges 
import React, { useState, useEffect }  from 'react';
import { Routes, Route } from "react-router-dom";
import { axios } from 'axios';

// import librarys and filles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/app.css"

// import pages
import Home from "./pages/Home";
import Prodacts from "./pages/Prodacts";
import ProdactPage from './pages/Prodact';
import CategoryPage from './pages/Category';
import Login from "./pages/Login";
import NotFound from './pages/404';

// import component
import Footer from './component/Footer';
import Header from './component/Header';


const App = () => {

    const axios = require('axios');

    const [prodacts, setProdacts] = useState([]);
    const [categoreis, setcategoreis] = useState([]);

    useEffect( () => {

        axios.get("https://fakestoreapi.com/products").then(
            (api) => setProdacts(api.data)
        )

        axios.get("https://fakestoreapi.com/products/categories").then(
            (api) => setcategoreis(api.data)
        )

    }, []);


    return ( 
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home
                        prodacts     = {prodacts}
                        categoreis   = {categoreis}
                />}/>
                <Route path='/prodacts' element={<Prodacts
                        prodacts     = {prodacts}
                        categoreis   = {categoreis}
                />} />
                <Route path='/prodacts/:id' element={<ProdactPage prodacts = {prodacts}/>} />
                <Route path='/prodacts/category/:name' element={<CategoryPage prodacts = {prodacts}/>} />
                <Route path='/login' element={<Login />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App;
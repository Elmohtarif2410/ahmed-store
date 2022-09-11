// import main packges 
import React, { useState, useEffect }  from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
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
import AdminPage from './pages/Admin';
import NotFound from './pages/404';

// import component
import Footer from './component/Footer';
import Header from './component/Header';
import AdminSection from './component/Admin-section';
import AdminProdacts from './component/Admin-prodacts';
import AdminCategories from './component/Admin.categories';



const App = () => {

    const axios = require('axios');
    const redirect = useNavigate();

    const [prodacts, setProdacts] = useState([]);
    const [categoreis, setcategoreis] = useState([]);

    const adminUsername = "ahmed";
    const adminPassword = "ahmed";
    const [logged, setLogged] = useState(true);

    useEffect( () => {

        axios.get("https://fakestoreapi.com/products").then(
            (api) => setProdacts(api.data)
        )

        axios.get("https://fakestoreapi.com/products/categories").then(
            (api) => setcategoreis(api.data)
        )

    }, []);


    const loginHandel = (e, user, pass) => {

        e.preventDefault();

        if (user === adminUsername && pass === adminPassword) {

            setLogged(true);

            redirect("/admin")

        } else {

            alert("username or password is wrong ")
        }
    }

    const logoutHandel = () => {

        setLogged(false);

        redirect("/")
    }

    return ( 
        <>
            <Header logged = {logged} />
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
                <Route path='/login' element={<Login loginHandel = {loginHandel} />}/>
                {
                    (logged === true) ? (

                        <Route path='/dashboard' element={<AdminPage />} > 
                            <Route path = ""  element={<AdminSection logoutHandel = {logoutHandel} />} />
                            <Route path = "prodacts"  element={<AdminProdacts prodacts = {prodacts} />} />
                            <Route path = "categories"  element={<AdminCategories />}/>
                        </Route>

                    ) : null
                }
                <Route path='*' element={<NotFound />}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App;
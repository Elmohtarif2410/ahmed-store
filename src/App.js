// import main packges 
import React, { useContext }  from 'react';
import { Routes, Route } from "react-router-dom";

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
import AdminCategories from './component/Admin-categories';
import AdminAddProdact from './component/Admin-add-prodact';
import AdminAddCategory from './component/Admin-add-category';

// import contexts 
import { ContextAdmin } from './context/admin-context';

const App = () => {

    const {logged} = useContext(ContextAdmin);

    return ( 
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/prodacts' element={<Prodacts />} />
                <Route path='/prodacts/:id' element={<ProdactPage />} />
                <Route path='/prodacts/category/:name' element={<CategoryPage />} />
                <Route path='/login' element={<Login />}/>
                {
                    (logged === true) ? (

                        <Route path='/dashboard' element={<AdminPage />} > 
                            <Route path = ""  element={<AdminSection />} />
                            <Route path = "prodacts"  element={<AdminProdacts />} />
                            <Route path = "prodacts/add-prodact"  element={<AdminAddProdact />} />
                            <Route path = "prodacts/edit-prodact/:id"  element={<AdminAddProdact />} />
                            <Route path = "categories"  element={<AdminCategories />}/>
                            <Route path = "categories/add-category"  element={<AdminAddCategory />} />
                            <Route path = "categories/edit-category/:id"  element={<AdminAddCategory />} />
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
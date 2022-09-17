/*
    Template: Ahmed Store
    made by : Ahmed Elmohtarif
    website : https://muhtarif.me
    date finsh : 17 / 9 / 2022
*/

// import main packages
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import App component 
import App from "./App";

// import contexts 
import ProdactsContext from './context/prodacts-context';
import CategoreisContext from './context/categoreis-context';
import AdminContext from './context/admin-context';

// create Root 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// Rendering
root.render(

        <BrowserRouter> 
            <ProdactsContext> 
                <CategoreisContext>
                    <AdminContext>

                        <App />

                    </AdminContext>
                </CategoreisContext>
            </ProdactsContext>
        </BrowserRouter>
)
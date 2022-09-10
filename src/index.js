// import main packages
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import App component 
import App from "./App";


// create Root 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Rendering
root.render(

        <BrowserRouter>
            <App />
        </BrowserRouter>

)
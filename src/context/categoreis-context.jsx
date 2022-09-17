import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

export const ContextCategoreis = React.createContext();

const CategoreisContext = (props) => {

    const axios = require('axios');
    const redirect = useNavigate();

    const [categoreis, setCategoreis] = useState([]);

    const [categoryName, setCategoryName] = useState("")

    useEffect( () => {
        axios.get("https://fakestoreapi.com/products/categories").then(
            (api) => setCategoreis(api.data)
        )
    }, []);


    // function remove category
    const adminRemoveCategory = (catRemove) => {

        // clone 
        const allcategoreis = [...categoreis];

        // deap clone
        const categoreisAfterRemove = allcategoreis.filter( (cat) => {
                return cat !== catRemove;
            }
        )

        // sweet alert 
        const test = Swal.fire({
            title: 'Are you sure delete category?',
            text: 'category: ' + catRemove,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e91e63',
            cancelButtonColor: '#9e9e9e',
            confirmButtonText: 'Delete'

        }).then((result) => {

            // if admin accepted to remove category
            if (result.isConfirmed) {

                // category remove
                setCategoreis(categoreisAfterRemove);
        
                // fack store Api dont delete category api
                // try {
                //     // call back end server
                //     axios.delete("https://fakestoreapi.com/products/" + prodactRemove.id);

                // } catch {
                //     // if falid call server => reset prodacts to old prodacts
                //     setProdacts(prodactsClone);
                // }

                // after remove prodact
                Swal.fire({
                    icon: 'success',
                    title: 'Your category has been deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    // function remove category
    const adminAddCategory = (e) => {
        // not reload page 
        e.preventDefault();

        // clone categoreis 
        let categoreisAfterAdd = [...categoreis];

        // add new category to clone category
        categoreisAfterAdd.push(categoryName);

        // set category by clone category
        setCategoreis(categoreisAfterAdd);

        // set inputs value
        setCategoryName("")

        // massege => done
        Swal.fire({
            icon: 'success',
            title: 'category Add.',
            showConfirmButton: false,
            timer: 1500
        })

        redirect('/dashboard/categories');
    }

    // function edit category
    const adminEditCategory = (e) => {
        // not reload page 
        e.preventDefault();
    }

    return (  
        <ContextCategoreis.Provider value={{categoreis, adminRemoveCategory, adminAddCategory, categoryName, setCategoryName}}>
            {props.children}
        </ContextCategoreis.Provider>
    );
}

export default CategoreisContext;
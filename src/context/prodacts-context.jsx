// import main packges 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

export const ContextProdacts = React.createContext();

const ProdactsContext = (props) => {

    const axios = require('axios');
    const MySwal = withReactContent(Swal);
    const redirect = useNavigate();

    const [prodacts, setProdacts] = useState([]);

    useEffect( () => {
        
        axios.get("https://fakestoreapi.com/products").then(
            (api) => setProdacts(api.data)
        )

    }, []);

    /************* Admin  *************/

    // inputs value
    const [title, setTitle]             = useState("");
    const [category, setCategory]       = useState("unclassified");
    const [price, setPrice]             = useState("");
    const [image, setImage]             = useState("");
    const [description, setDescription] = useState("");

    const adminRemoveProdact = (prodactRemove) => {

        // clone server
        const prodactsClone = [...prodacts]; 

        // clone 
        const allProdacts = [...prodacts];

        // deap clone
        const prodactsAfterRemove = allProdacts.filter( (prod) => {

                return prod !== prodactRemove;
            }
        )

        // sweet alert 
        const test = Swal.fire({
            title: 'Are you sure delete Prodact?',
            text: 'Prodact: ' + prodactRemove.title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e91e63',
            cancelButtonColor: '#9e9e9e',
            confirmButtonText: 'Delete'

        }).then((result) => {

            // if admin accepted to remove prodact
            if (result.isConfirmed) {

                // prodact remove
                setProdacts(prodactsAfterRemove);
        
                try {
                    // call back end server
                    axios.delete("https://fakestoreapi.com/products/" + prodactRemove.id);

                } catch {
                    // if falid call server => reset prodacts to old prodacts
                    setProdacts(prodactsClone);
                }

                // after remove prodact
                Swal.fire({
                    icon: 'success',
                    title: 'Your prodact has been deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const adminAddProdact = (e) => {

        e.preventDefault();

        // clone prodacts before actions
        const prodactsClone = [...prodacts];

        // clone prodacts 
        let prodactsAfterAdd = [...prodacts];

        // create new prodacts
        const newProdact = {
            id: (prodacts.length + 1),
            title,
            price,
            description,
            category,
            image,
            rating:{
                rate:5,
                count:0
            }
        }

        // add new prodacts to clone prodacts
        prodactsAfterAdd.push(newProdact)

        // set prodacts by clone prodacts
        setProdacts(prodactsAfterAdd);

        // call server

        // if call server sucsess => don`t action 
        try {

            axios.post('https://fakestoreapi.com/products', newProdact)

            // if call server faild => set prodacts > old prodacts before add
        } catch {

            setProdacts(prodactsClone);
        }

        // set inputs value
        setTitle("");
        setCategory("unclassified");
        setPrice("");
        setImage("");
        setDescription("");

        Swal.fire({
            icon: 'success',
            title: 'Prodact Add.',
            showConfirmButton: false,
            timer: 1500
        })

        redirect('/dashboard/prodacts');
    }

    // function edit prodact
    const adminEditProdact = (e, pordId) => {

        e.preventDefault();


        // clone to server error
        const prodactsClone = [...prodacts];

        // clone
        const prodactsAfterEdit = [...prodacts]

        // deap clone
        const prodactEdit = prodactsAfterEdit.filter( (prodact) => (
            prodact.id == pordId
        ))[0];

        // edit 
        prodactEdit.title = title;
        prodactEdit.category = category;
        prodactEdit.price = price;
        prodactEdit.image = image;
        prodactEdit.description = description;

        // set prodacts
        setProdacts(prodactsAfterEdit);

        // if call server sucsess => don`t action 
        try {

            axios.put('https://fakestoreapi.com/products/' + prodactEdit.id, prodactEdit)

            // if call server faild => set prodacts > old prodacts before add
        } catch {

            setProdacts(prodactsClone);
        }

        // set inputs value
        setTitle("");
        setCategory("unclassified");
        setPrice("");
        setImage("");
        setDescription("");

        Swal.fire({
            icon: 'success',
            title: 'Prodact Edit.',
            showConfirmButton: false,
            timer: 1500
        })

        // redirect to prodacts admin page
        redirect('/dashboard/prodacts');

    }

    return (  
        <ContextProdacts.Provider value={{
                prodacts,
                adminRemoveProdact, 
                adminAddProdact,
                adminEditProdact,
                title, setTitle,
                category, setCategory,
                price, setPrice,
                image, setImage,
                description, setDescription
            }}>
            {props.children}
        </ContextProdacts.Provider>
    );
}

export default ProdactsContext;
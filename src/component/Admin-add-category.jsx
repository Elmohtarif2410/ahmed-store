// import main packges 
import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// import contexts 
import { ContextCategoreis } from '../context/categoreis-context';

const AdminAddCategory = () => {

    const {categoryName, setCategoryName, adminAddCategory, adminEditCategory} = useContext(ContextCategoreis);

    const location = useLocation().pathname;

    const thisCategory = useParams().name;

    // set input fild vlue by params name
    useEffect( () => {

        if (location.includes("edit-category")) {
            setCategoryName(thisCategory)
        }

    }, []);

    // on submit function => add or edit

    const onSubmitFuction = (e) => {

        if (location.includes("add-category")) {

            adminAddCategory(e)

        } else {

            adminEditCategory(e, thisCategory)

        }
    }

    return (
        <>
            {
                (location.includes("add-category")) ? (
                    <h1 className='heading-page'>add category</h1>
                ) : (
                    <h1 className='heading-page'>edit category</h1>
                )
            }

            <section className='add-category'>
                <form className='my-5' onSubmit={e => onSubmitFuction(e)}>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="category_name" className="form-label">category name</label>
                            <input onChange={(e) => setCategoryName(e.target.value)} value={categoryName} type="text" className="form-control" id="category_name" required />
                        </div>
                        <button type="submit" style={buttonStyle}>
                            {
                                (location.includes("add-category")) ? "add category" : "edit category"
                            }
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

const buttonStyle = {
    display: "block",
    width: "fit-content",
    textTransform: "capitalize",
    textDecoration: "none",
    backgroundColor: "var(--main-color)",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    padding: "8px 15px",
    borderRadius: "7px",
    margin: "35px auto 0",
    outline: "none",
    border: "none"
}

export default AdminAddCategory;
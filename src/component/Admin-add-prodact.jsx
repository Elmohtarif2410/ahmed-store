// import main packges 
import React, { useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// import contexts 
import { ContextProdacts } from './../context/prodacts-context';
import { ContextCategoreis } from '../context/categoreis-context';


const AdminAddProdact = () => {

    const { categoreis } = useContext(ContextCategoreis);
    const { adminAddProdact, adminEditProdact } = useContext(ContextProdacts);

    const categoryOption = categoreis.map( (catoption) => (
        <option key={catoption} value={catoption}>{catoption}</option>
    ));

    // inputs vlue
    const {
        title, setTitle, category, setCategory,
        price, setPrice, image, setImage,
        description, setDescription
    } = useContext(ContextProdacts);


    // functionlaty add or edit prodact

    const location = useLocation().pathname;

    const prodactId = useParams().id;

    // on submit function => add or edit
    const onSubmitFuction = (e) => {

        if (location.includes("add-prodact")) {

            adminAddProdact(e);

        } else {

            adminEditProdact(e, prodactId)
        }
    }

    return (  
        <> 
            {
                (location.includes("add-prodact")) ? (
                    <h1 className='heading-page'>add prodact</h1>
                ) : (
                    <h1 className='heading-page'>edit prodact</h1>
                )
            }
            
            <section className='add-prodact'>
                <form className='my-5' onSubmit={(e) => onSubmitFuction(e)}>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="prodact_title" className="form-label">prodact title</label>
                            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="prodact_title" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prodact_category" className="form-label">prodact category</label>
                            <select onChange={(e) => setCategory(e.target.value)} value={category} className="form-select" id='prodact_category'required >
                                <optgroup label='choose category'>
                                    <option value="unclassified" disabled>unclassified</option>
                                    {categoryOption}
                                </optgroup>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prodact_price" className="form-label">prodact price</label>
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" className="form-control" id="prodact_price" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prodact_image" className="form-label">prodact image</label>
                            <input onChange={(e) => setImage(e.target.value)} value={image} type="url" className="form-control" id="prodact_image" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prodact_description" className="form-label">prodact description</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} value={description} rows="5"className="form-control" id="prodact_description" required />
                        </div>
                        <button type="submit" style={buttonStyle}>
                            {
                                (location.includes("add-prodact")) ? "add prodact" : "edit prodact"
                            }
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
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

export default AdminAddProdact;
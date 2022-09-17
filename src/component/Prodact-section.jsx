// import main packges 
import React from 'react';
import { Link } from 'react-router-dom';

// import component
import RateProdact from './Rate-prodact';

const ProdactSection = (props) => {

    const prodact = props.prodact;

    return (  
        <section className="prodact">
            <div className="card">
                <div className="image">
                    <img src={prodact.image} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <RateProdact prodact = {prodact}/>
                    <h3 className="card-title">{prodact.title}</h3>
                    <div className="box">
                        <span>{prodact.price}</span>
                        <Link to={"/prodacts/" + prodact.id}>dateles</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProdactSection;
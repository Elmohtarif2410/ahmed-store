import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                    <div className="rate">
                        <div className="stars">
                                <RateProdact prodact = {prodact}/>
                        </div>
                        <div className="text">
                            by 
                            <span>{prodact.rating.count}</span>
                            reveiwer
                        </div>
                    </div>
                    <h3 className="card-title">{prodact.title}</h3>
                    <Link to={"/prodacts/" + prodact.id}>dateles</Link>
                </div>
            </div>
        </section>
    );
}

export default ProdactSection;
// import main packges 
import React from 'react';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RateProdact = (props) => {

    const prodact = props.prodact;

    const rating = () => {

        const rate = Math.round(prodact.rating.rate);

        switch (rate) {
            case 1: 
                return <FontAwesomeIcon icon={faStar} />
                break;
            case 2: 
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </>
                )
                break;
            case 3: 
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </>
                )
                break;
            case 4: 
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </>
                )
                break;
            case 5: 
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </>
                )
                break;
        } 
    }

    return (  
        <>
            <div className="rate">
                <div className="stars">
                    {rating()}
                </div>
                <div className="text">
                    by 
                    <span>{prodact.rating.count}</span>
                    reveiwer
                </div>
            </div>
        </>
    );
}

export default RateProdact;
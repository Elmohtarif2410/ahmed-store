import React from 'react';

import Landing1 from "../assets/images/landing-1.jpg";
import Landing2 from "../assets/images/landing-2.jpg";
import Landing3 from "../assets/images/landing-3.jpg";

const Landing = () => {
    return ( 
        <section className='landing'>
            <div id="shoop_slide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#shoop_slide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#shoop_slide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#shoop_slide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Landing1} className="d-block w-100" alt="landing image one" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ahmed store</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Landing2} className="d-block w-100" alt="landing image two" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Online store</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Landing3} className="d-block w-100" alt="landing image two" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>E-commarce</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#shoop_slide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#shoop_slide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </section>
    );
}

export default Landing;
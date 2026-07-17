import React from 'react';
import NavBar from './NavBar';
import BeautifulFooter from './footer';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <h2 className="text-center mb-4">About Us</h2>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card shadow">
                            <div className="card-body">
                                <h4 className="card-title">About Blue Wave</h4>
                                <p className="card-text">
                                    Welcome to Blue Wave, your premier destination for quality automotive care products and services. 
                                    We specialize in providing top-notch car washing, auto spa treatments, and premium household items.
                                </p>
                                <p className="card-text">
                                    Our mission is to deliver exceptional service and products that meet your automotive and household needs.
                                </p>
                                <h5 className="mt-4">Our Services Include:</h5>
                                <ul className="list-unstyled">
                                    <li>Professional Car Washing</li>
                                    <li>Premium Auto Spa Treatments</li>
                                    <li>Quality Household Products</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BeautifulFooter />
        </div>
    );
};

export default About;

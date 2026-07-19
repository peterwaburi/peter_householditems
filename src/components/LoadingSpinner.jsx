import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ message = "Loading..." }) => {
    return (
        <div className="text-center py-3">
            <Spinner 
                animation="border" 
                role="status"
                style={{ 
                    width: "3rem", 
                    height: "3rem",
                    color: "#3282B8"
                }}
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            {message && (
                <p className="mt-2 mb-0" style={{ color: "#3282B8", fontWeight: "500" }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default LoadingSpinner;

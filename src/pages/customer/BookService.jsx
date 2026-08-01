import React, { useState } from "react";

const BookService = () => {
    const [booking, setBooking] = useState({
        service: "",
        package: "",
        vehicle: "",
        date: "",
        time: "",
        location: "",
        notes: ""
    });

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(booking);
        alert("Booking submitted successfully.");
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4">Book a Service</h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label>Service</label>
                        <select
                            className="form-control"
                            name="service"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Service</option>
                            <option>Car Wash</option>
                            <option>Interior Cleaning</option>
                            <option>Engine Wash</option>
                            <option>Carpet Cleaning</option>
                            <option>Seat Cleaning</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Package</label>
                        <select
                            className="form-control"
                            name="package"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Package</option>
                            <option>Basic</option>
                            <option>Standard</option>
                            <option>Premium</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Vehicle Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicle"
                            onChange={handleChange}
                            placeholder="e.g. Toyota Prado"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Time</label>
                        <input
                            type="time"
                            className="form-control"
                            name="time"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Location</label>
                        <input
                            type="text"
                            className="form-control"
                            name="location"
                            onChange={handleChange}
                            placeholder="Enter service location"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Additional Notes</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            name="notes"
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn btn-primary w-100">
                        Submit Booking
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BookService;
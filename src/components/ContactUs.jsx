import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram
} from "react-icons/fa";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function ContactUs() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading("Sending message...");
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("https://peter511.alwaysdata.net/api/contact", formData);
            
            if (response.status === 200) {
                setLoading("");
                setSuccess("Your message has been sent successfully.");
                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: ""
                });
            }
        } catch (error) {
            setLoading("");
            setError("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="contact-page">

            {/* separator */}
            <hr className="nav-separator" style={{ borderColor: '#3282B8', margin: '0 0 20px 0' }} />

            {/* header */}
            <div className="contact-header" style={{ 
                backgroundColor: '#0F4C75', 
                color: '#F8F9FA', 
                padding: '40px 20px', 
                textAlign: 'center' 
            }}>
                <h1 style={{ fontWeight: '700', marginBottom: '10px' }}>Contact Us</h1>
                <p style={{ margin: '0' }}>Reach out to Blue Wave Car Wash & Autospa anytime.</p>
            </div>

            {/* body */}
            <div className="container py-5">
                <div className="row g-5">

                    {/* LEFT */}
                    <div className="col-lg-4">
                        <div className="contact-card" style={{
                            backgroundColor: '#F8F9FA',
                            padding: '30px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>

                            <h2 style={{ color: '#0F4C75', fontWeight: '700', marginBottom: '30px', fontSize: '24px' }}>Contact Information</h2>

                            <div className="contact-item" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '25px',
                                padding: '15px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '8px',
                                transition: 'transform 0.2s ease'
                            }}>
                                <a href="tel:0140078589" style={{ 
                                    fontSize: '28px', 
                                    color: '#3282B8', 
                                    marginRight: '20px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}><FaPhoneAlt /></a>
                                <div style={{ flex: 1 }}>
                                    <h5 style={{ color: '#0F4C75', fontWeight: '600', margin: '0 0 8px 0', fontSize: '16px' }}>Phone</h5>
                                    <p style={{ color: '#1B262C', margin: '0', fontSize: '15px' }}>0140078589</p>
                                </div>
                            </div>

                            <div className="contact-item" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '25px',
                                padding: '15px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '8px',
                                transition: 'transform 0.2s ease'
                            }}>
                                <a href="mailto:info@bluewaveautospa.com" style={{ 
                                    fontSize: '28px', 
                                    color: '#3282B8', 
                                    marginRight: '20px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}><FaEnvelope /></a>
                                <div style={{ flex: 1 }}>
                                    <h5 style={{ color: '#0F4C75', fontWeight: '600', margin: '0 0 8px 0', fontSize: '16px' }}>Email</h5>
                                    <p style={{ color: '#1B262C', margin: '0', fontSize: '15px' }}>info@bluewaveautospa.com</p>
                                </div>
                            </div>

                            <div className="contact-item" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '25px',
                                padding: '15px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '8px',
                                transition: 'transform 0.2s ease',
                                cursor: 'pointer'
                            }}>
                                <a href="https://www.google.com/maps/search/?api=1&query=Blue+Wave+Car+Wash+Nairobi+Kenya" target="_blank" rel="noopener noreferrer" style={{ 
                                    fontSize: '28px', 
                                    color: '#3282B8', 
                                    marginRight: '20px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}><FaMapMarkerAlt /></a>
                                <div style={{ flex: 1 }}>
                                    <h5 style={{ color: '#0F4C75', fontWeight: '600', margin: '0 0 8px 0', fontSize: '16px' }}>Location</h5>
                                    <p style={{ color: '#1B262C', margin: '0', fontSize: '15px' }}>Nairobi, Kenya</p>
                                </div>
                            </div>

                            <div className="contact-item" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '25px',
                                padding: '15px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '8px',
                                transition: 'transform 0.2s ease'
                            }}>
                                <div style={{ fontSize: '28px', color: '#3282B8', marginRight: '20px', display: 'flex', alignItems: 'center' }}><FaClock /></div>
                                <div style={{ flex: 1 }}>
                                    <h5 style={{ color: '#0F4C75', fontWeight: '600', margin: '0 0 8px 0', fontSize: '16px' }}>Working Hours</h5>
                                    <p style={{ color: '#1B262C', margin: '0', fontSize: '15px' }}>Mon - Sat : 8AM - 7PM</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '35px' }}>
                                <h5 style={{ color: '#0F4C75', fontWeight: '600', marginBottom: '20px', fontSize: '16px' }}>Follow Us</h5>
                                <div className="socials" style={{ display: 'flex', gap: '20px' }}>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ 
                                        fontSize: '28px', 
                                        color: '#3282B8', 
                                        textDecoration: 'none',
                                        transition: 'transform 0.2s ease, color 0.2s ease'
                                    }}><FaFacebookF /></a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ 
                                        fontSize: '28px', 
                                        color: '#3282B8', 
                                        textDecoration: 'none',
                                        transition: 'transform 0.2s ease, color 0.2s ease'
                                    }}><FaInstagram /></a>
                                    <a href="https://wa.me/25470078589" target="_blank" rel="noopener noreferrer" style={{ 
                                        fontSize: '28px', 
                                        color: '#3282B8', 
                                        textDecoration: 'none',
                                        transition: 'transform 0.2s ease, color 0.2s ease'
                                    }}><FaWhatsapp /></a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-8">
                        <div className="form-card" style={{
                            backgroundColor: '#F8F9FA',
                            padding: '30px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>

                            <h2 style={{ color: '#0F4C75', fontWeight: '700', marginBottom: '25px' }}>Send Us A Message</h2>

                            {loading && <LoadingSpinner message={loading} />}
                            {error && <div style={{ color: '#DC3545', marginBottom: '15px', padding: '10px', backgroundColor: '#F8D7DA', borderRadius: '5px' }}>{error}</div>}
                            {success && <div style={{ color: '#28A745', marginBottom: '15px', padding: '10px', backgroundColor: '#D4EDDA', borderRadius: '5px' }}>{success}</div>}

                            <form onSubmit={handleSubmit}>
                                <input 
                                    name="fullname" 
                                    placeholder="Full Name" 
                                    onChange={handleChange} 
                                    value={formData.fullname}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        marginBottom: '15px',
                                        border: '1px solid #3282B8',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />
                                <input 
                                    name="email" 
                                    placeholder="Email" 
                                    onChange={handleChange} 
                                    value={formData.email}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        marginBottom: '15px',
                                        border: '1px solid #3282B8',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />
                                <input 
                                    name="phone" 
                                    placeholder="Phone" 
                                    onChange={handleChange} 
                                    value={formData.phone}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        marginBottom: '15px',
                                        border: '1px solid #3282B8',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />

                                <select 
                                    name="service" 
                                    onChange={handleChange} 
                                    value={formData.service}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        marginBottom: '15px',
                                        border: '1px solid #3282B8',
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        backgroundColor: '#FFFFFF'
                                    }}
                                >
                                    <option value="">Select Service</option>
                                    <option>Car Wash</option>
                                    <option>Interior Cleaning</option>
                                    <option>Engine Cleaning</option>
                                    <option>Full Detailing</option>
                                </select>

                                <textarea 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Message" 
                                    onChange={handleChange} 
                                    value={formData.message}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        marginBottom: '15px',
                                        border: '1px solid #3282B8',
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        resize: 'vertical'
                                    }}
                                />

                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    style={{
                                        backgroundColor: '#3282B8',
                                        color: '#FFFFFF',
                                        border: 'none',
                                        padding: '12px 30px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        borderRadius: '5px',
                                        cursor: loading ? 'not-allowed' : 'pointer',
                                        opacity: loading ? 0.7 : 1
                                    }}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>

            <hr className="section-separator" style={{ borderColor: '#3282B8', margin: '20px 0' }} />

            </div>
    );
}

export default ContactUs;


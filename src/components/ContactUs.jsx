import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";
import { API_ENDPOINTS } from "../config";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading("Sending message...");
        setError("");
        setSuccess("");

        try {
            const response = await fetch(API_ENDPOINTS.contact, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setLoading("");
                setSuccess("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setLoading("");
                setError("Failed to send message. Please try again.");
            }
        } catch (error) {
            setLoading("");
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <NavBar />
            <Container className="mt-5">
                <h2 className="text-center mb-4">Contact Us</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your phone number"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your message"
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" disabled={loading}>
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {error && (
                    <div className="alert alert-danger mt-3">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="alert alert-success mt-3">
                        {success}
                    </div>
                )}
            </Container>
            <BeautifulFooter />
        </div>
    );
};

export default ContactUs;

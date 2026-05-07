import NavBar from "./NavBar";
import BeautifulFooter from "./footer";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutUs = () => {
    return (
        <div>

            {/* NAVBAR */}
            <NavBar />

            {/* ================= HERO SECTION ================= */}
            <div className="about-hero text-center">

                <h1 className="about-title">
                    About <span className="highlight">Blue Wave</span>
                </h1>

                <p className="about-subtitle">
                    Premium Car Wash & Autospa Services You Can Trust
                </p>

            </div>

            {/* ================= WHO WE ARE ================= */}
            <Container className="mt-5">

                <h2 className="section-title text-center">Who We Are</h2>

                <p className="text-center section-text">
                    Blue Wave Car Wash & Autospa is a modern vehicle care service provider
                    dedicated to delivering high-quality cleaning, detailing, and maintenance
                    services. We combine professionalism, modern equipment, and affordability
                    to ensure your vehicle always looks its best.
                </p>

            </Container>

            {/* ================= MISSION ================= */}
            <Container className="mt-5">

                <h2 className="section-title text-center">Our Mission</h2>

                <p className="text-center section-text">
                    To provide reliable, affordable, and premium vehicle and household cleaning
                    services while ensuring customer satisfaction through quality and trust.
                </p>

            </Container>

            {/* ================= SERVICES ================= */}
            <Container className="mt-5">

                <h2 className="section-title text-center">What We Do</h2>

                <Row className="mt-4">

                    <Col md={4}>
                        <Card className="about-card shadow text-center">
                            <Card.Body>
                                <h4>🚗 Vehicle Cleaning</h4>
                                <p>Exterior wash, interior detailing, polishing, and deep cleaning.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="about-card shadow text-center">
                            <Card.Body>
                                <h4>🔧 Repair & Servicing</h4>
                                <p>Engine diagnostics, oil changes, brake service, and full maintenance.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="about-card shadow text-center">
                            <Card.Body>
                                <h4>🏠 Household Cleaning</h4>
                                <p>Sofa cleaning, carpet washing, and appliance deep cleaning services.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

            {/* ================= WHY CHOOSE US ================= */}
            <Container className="mt-5">

                <h2 className="section-title text-center">Why Choose Us</h2>

                <Row className="mt-4 text-center">

                    <Col md={3}>
                        <h5>✔ Experienced Staff</h5>
                    </Col>

                    <Col md={3}>
                        <h5>✔ Affordable Pricing</h5>
                    </Col>

                    <Col md={3}>
                        <h5>✔ Modern Equipment</h5>
                    </Col>

                    <Col md={3}>
                        <h5>✔ Fast Service</h5>
                    </Col>

                </Row>

            </Container>

            {/* ================= CALL TO ACTION ================= */}
            <div className="cta-section text-center mt-5">

                <h2>Ready to give your vehicle premium care?</h2>

                <p>Visit us today or book a service online.</p>

                <button className="btn btn-dark cta-btn">
                    Contact Us
                </button>

            </div>

            {/* FOOTER */}
            <BeautifulFooter />

        </div>
    );
};

export default AboutUs;

import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export function BeautifulFooter() {
    return (
        <footer className="footer">
            <Container>
                <Row className="gy-4">

                    {/* Social Media */}
                    <Col md={4}>
                        <h5 className="footer-title">Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                    </Col>

                    {/* Contact */}
                    <Col md={4}>
                        <h5 className="footer-title">Contact Us</h5>
                        <p><FaPhone /> +254 700 000000</p>
                        <p><FaEnvelope /> info@autoglow.com</p>
                        <p><FaMapMarkerAlt /> Nairobi, Kenya</p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={4}>
                        <h5 className="footer-title">Quick Menu</h5>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                </Row>

                <div className="footer-bottom text-center">
                    <p>© {new Date().getFullYear()} AutoGlow. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

export default BeautifulFooter;
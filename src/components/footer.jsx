import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export function BeautifulFooter() {
    return (
        <footer className="footer">
            <Container>
                <Row className="gy-4">

                    {/* Social Media */}
                    <Col md={4}>
                        <h5 className="footer-title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Follow Us</h5>
                        <div className="social-icons" style={{ display: 'flex', gap: '20px' }}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '32px', color: '#F8F9FA', textDecoration: 'none' }}><FaFacebook /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '32px', color: '#F8F9FA', textDecoration: 'none' }}><FaInstagram /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '32px', color: '#F8F9FA', textDecoration: 'none' }}><FaTwitter /></a>
                        </div>
                    </Col>

                    {/* Contact */}
                    <Col md={4}>
                        <h5 className="footer-title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Contact Us</h5>
                        <p style={{ fontSize: '16px', marginBottom: '12px' }}><FaPhone style={{ fontSize: '20px', marginRight: '10px', color: '#3282B8' }} /> <a href="tel:+25470078589" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>+254 700 78589</a></p>
                        <p style={{ fontSize: '16px', marginBottom: '12px' }}><FaEnvelope style={{ fontSize: '20px', marginRight: '10px', color: '#3282B8' }} /> <a href="mailto:info@bluewaveautospa.com" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>info@bluewaveautospa.com</a></p>
                        <p style={{ fontSize: '16px', marginBottom: '12px' }}><FaMapMarkerAlt style={{ fontSize: '20px', marginRight: '10px', color: '#3282B8' }} /> <a href="https://www.google.com/maps/search/?api=1&query=Blue+Wave+Car+Wash+Nairobi+Kenya" target="_blank" rel="noopener noreferrer" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>Nairobi, Kenya</a></p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={4}>
                        <h5 className="footer-title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Quick Menu</h5>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><a href="/" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>Home</a></li>
                            <li style={{ marginBottom: '12px' }}><a href="/productsandservices" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>Services</a></li>
                            <li style={{ marginBottom: '12px' }}><a href="/about" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>About</a></li>
                            <li style={{ marginBottom: '12px' }}><a href="/contact" style={{ color: '#F8F9FA', textDecoration: 'none', fontSize: '16px' }}>Contact</a></li>
                        </ul>
                    </Col>

                </Row>

                <div className="footer-bottom text-center" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #3282B8' }}>
                    <p style={{ fontSize: '16px', margin: 0 }}>© {new Date().getFullYear()} Blue Wave Car Wash & Autospa. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

export default BeautifulFooter;
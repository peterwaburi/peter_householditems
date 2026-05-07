import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AutoGlowNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar" sticky="top">
            <Container>

                <Navbar.Brand href="/" className="brand-link">
                    <FaCarSide className="brand-icon" />
                    <span className="brand-name">Blue Wave</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>

                        <NavDropdown title="Our Services" id="services-dropdown">
                            <NavDropdown.Item href="#services">Car Wash</NavDropdown.Item>
                            <NavDropdown.Item href="#detailing">Detailing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#products">Our Products</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#contact">Contact Us</Nav.Link>

                        <Nav.Link href="#wishlist" className="icon-link">
                            <FaHeart />
                        </Nav.Link>

                        <Nav.Link href="#cart" className="icon-link">
                            <FaShoppingCart />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
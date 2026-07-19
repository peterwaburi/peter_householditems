import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaCarSide } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CART_UPDATED_EVENT, getCartCount } from "../utils/cart";

export default function AutoGlowNavbar() {
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCartCount = () => {
            setCartCount(getCartCount());
        };

        updateCartCount();
        
        const handleStorageChange = () => {
            updateCartCount();
        };
        
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener(CART_UPDATED_EVENT, handleStorageChange);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener(CART_UPDATED_EVENT, handleStorageChange);
        };
    }, []);

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

                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        <Nav.Link as={Link} to="/productsandservices">Our Products and Services</Nav.Link>

                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

                        <Nav.Link as={Link} to="/cart" className="icon-link position-relative">
                            <FaShoppingCart />
                            {cartCount > 0 && (
                                <Badge
                                    bg="danger"
                                    className="position-absolute"
                                    style={{
                                        top: '-8px',
                                        right: '-8px',
                                        fontSize: '10px',
                                        padding: '2px 6px',
                                        borderRadius: '10px'
                                    }}
                                >
                                    {cartCount}
                                </Badge>
                            )}
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
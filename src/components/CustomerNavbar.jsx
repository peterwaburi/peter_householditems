import {
    Navbar,
    Nav,
    Container,
    Button
} from "react-bootstrap";

import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    FaHome,
    FaCalendarAlt,
    FaShoppingCart,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import { getUser, logout } from "../utils/auth";

const CustomerNavbar = () => {

    const navigate = useNavigate();

    const user = getUser();

    const handleLogout = () => {

        logout();

        navigate("/signin", {
            replace: true
        });

    };

    return (

        <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >

            <Container>

                <Navbar.Brand
                    as={Link}
                    to="/customer/dashboard"
                    className="fw-bold"
                >

                    BlueWave

                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav className="me-auto">

                        <Nav.Link
                            as={Link}
                            to="/customer/dashboard"
                        >
                            <FaHome className="me-1" />
                            Dashboard
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/book-service"
                        >
                            <FaCalendarAlt className="me-1" />
                            Book Service
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/products-and-services"
                        >
                            Products
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/cart"
                        >
                            <FaShoppingCart className="me-1" />
                            Cart
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/orders"
                        >
                            Orders
                        </Nav.Link>

                    </Nav>

                    <Nav className="align-items-lg-center">

                        <Nav.Link
                            as={Link}
                            to="/profile"
                        >
                            <FaUser className="me-1" />

                            {user?.username ||
                                user?.first_name ||
                                "Profile"}

                        </Nav.Link>

                        <Button
                            variant="outline-light"
                            size="sm"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt className="me-1" />
                            Logout
                        </Button>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
};

export default CustomerNavbar;
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
    FaUsers,
    FaUserTie,
    FaCar,
    FaBox,
    FaChartBar,
    FaSignOutAlt
} from "react-icons/fa";

import { logout } from "../utils/auth";

const ManagerNavbar = () => {

    const navigate = useNavigate();

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

            <Container fluid>

                <Navbar.Brand
                    as={Link}
                    to="/manager/dashboard"
                    className="fw-bold"
                >

                    BlueWave Manager

                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav className="me-auto">

                        <Nav.Link
                            as={Link}
                            to="/manager/dashboard"
                        >
                            <FaHome className="me-1" />
                            Dashboard
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/manager/customers"
                        >
                            <FaUsers className="me-1" />
                            Customers
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/manager/workers"
                        >
                            <FaUserTie className="me-1" />
                            Workers
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/manager/bookings"
                        >
                            <FaCar className="me-1" />
                            Bookings
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/manager/products"
                        >
                            <FaBox className="me-1" />
                            Products
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/manager/reports"
                        >
                            <FaChartBar className="me-1" />
                            Reports
                        </Nav.Link>

                    </Nav>

                    <Button
                        variant="outline-light"
                        size="sm"
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt className="me-1" />
                        Logout
                    </Button>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
};

export default ManagerNavbar;
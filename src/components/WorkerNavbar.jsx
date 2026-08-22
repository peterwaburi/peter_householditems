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
    FaTasks,
    FaCalendarAlt,
    FaClock,
    FaSignOutAlt
} from "react-icons/fa";

import { logout } from "../utils/auth";

const WorkerNavbar = () => {

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
                    to="/worker/dashboard"
                    className="fw-bold"
                >

                    BlueWave Worker

                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav className="me-auto">

                        <Nav.Link
                            as={Link}
                            to="/worker/dashboard"
                        >
                            <FaHome className="me-1" />
                            Dashboard
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/worker/jobs"
                        >
                            <FaTasks className="me-1" />
                            Jobs
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/worker/schedule"
                        >
                            <FaCalendarAlt className="me-1" />
                            Schedule
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/worker/attendance"
                        >
                            <FaClock className="me-1" />
                            Attendance
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

export default WorkerNavbar;
import {
    Nav
} from "react-bootstrap";

import {
    Link
} from "react-router-dom";

import {
    getUserRole
} from "../utils/auth";

const RoleMenu = () => {

    const role = getUserRole();

    if (
        role === "manager" ||
        role === "admin"
    ) {

        return (

            <Nav className="me-auto">

                <Nav.Link
                    as={Link}
                    to="/manager/dashboard"
                >
                    Dashboard
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/manager/customers"
                >
                    Customers
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/manager/workers"
                >
                    Workers
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/manager/products"
                >
                    Products
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/manager/reports"
                >
                    Reports
                </Nav.Link>

            </Nav>

        );

    }

    if (role === "worker") {

        return (

            <Nav className="me-auto">

                <Nav.Link
                    as={Link}
                    to="/worker/dashboard"
                >
                    Dashboard
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/worker/jobs"
                >
                    Jobs
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/worker/schedule"
                >
                    Schedule
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/worker/attendance"
                >
                    Attendance
                </Nav.Link>

            </Nav>

        );

    }

    return (

        <Nav className="me-auto">

            <Nav.Link
                as={Link}
                to="/customer/dashboard"
            >
                Dashboard
            </Nav.Link>

            <Nav.Link
                as={Link}
                to="/book-service"
            >
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
                to="/orders"
            >
                Orders
            </Nav.Link>

        </Nav>

    );
};

export default RoleMenu;
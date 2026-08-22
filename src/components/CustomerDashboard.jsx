import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Alert
} from "react-bootstrap";
import { Link } from "react-router-dom";

import CustomerNavbar from "./CustomerNavbar";
import DashboardCard from "./DashboardCard";
import LoadingSpinner from "./LoadingSpinner";

import {
    getCustomerDashboard
} from "../api/customerDashboard";

const CustomerDashboard = () => {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const response =
                    await getCustomerDashboard();

                setDashboard(
                    response.data?.data ??
                    response.data ??
                    {}
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load customer dashboard."
                );

            } finally {

                setLoading(false);

            }
        };

        loadDashboard();

    }, []);

    return (
        <>
            <CustomerNavbar />

            <Container className="py-4">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Customer Dashboard
                    </h2>

                    <p className="text-muted">
                        Manage your car wash services,
                        bookings, orders and vehicles.
                    </p>

                </div>

                {loading && (
                    <LoadingSpinner
                        message="Loading dashboard..."
                    />
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!loading && !error && (

                    <>
                        <Row className="g-3 mb-4">

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Bookings"
                                    value={
                                        dashboard?.bookings_count ??
                                        dashboard?.total_bookings ??
                                        0
                                    }
                                    icon="📅"
                                />
                            </Col>

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Orders"
                                    value={
                                        dashboard?.orders_count ??
                                        dashboard?.total_orders ??
                                        0
                                    }
                                    icon="🛒"
                                />
                            </Col>

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Vehicles"
                                    value={
                                        dashboard?.vehicles_count ??
                                        dashboard?.total_vehicles ??
                                        0
                                    }
                                    icon="🚗"
                                />
                            </Col>

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Reviews"
                                    value={
                                        dashboard?.reviews_count ??
                                        dashboard?.total_reviews ??
                                        0
                                    }
                                    icon="⭐"
                                />
                            </Col>

                        </Row>

                        <Row className="g-4">

                            <Col md={4}>

                                <Card className="border-0 shadow-sm h-100">

                                    <Card.Body>

                                        <h5>
                                            Book a Service
                                        </h5>

                                        <p className="text-muted">
                                            Schedule your next
                                            car wash or AutoSpa
                                            service.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/book-service"
                                            variant="primary"
                                        >
                                            Book Service
                                        </Button>

                                    </Card.Body>

                                </Card>

                            </Col>

                            <Col md={4}>

                                <Card className="border-0 shadow-sm h-100">

                                    <Card.Body>

                                        <h5>
                                            Products & Services
                                        </h5>

                                        <p className="text-muted">
                                            Browse available
                                            services and products.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/products-and-services"
                                            variant="outline-primary"
                                        >
                                            Browse
                                        </Button>

                                    </Card.Body>

                                </Card>

                            </Col>

                            <Col md={4}>

                                <Card className="border-0 shadow-sm h-100">

                                    <Card.Body>

                                        <h5>
                                            My Orders
                                        </h5>

                                        <p className="text-muted">
                                            View your previous
                                            and current orders.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/orders"
                                            variant="outline-primary"
                                        >
                                            View Orders
                                        </Button>

                                    </Card.Body>

                                </Card>

                            </Col>

                        </Row>
                    </>
                )}

            </Container>
        </>
    );
};

export default CustomerDashboard;
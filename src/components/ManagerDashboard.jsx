import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Alert,
    Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

import ManagerNavbar from "./ManagerNavbar";
import ManagerStatCard from "./ManagerStatCard";
import LoadingSpinner from "./LoadingSpinner";

import {
    getManagerDashboard
} from "../api/managerDashboard";

const ManagerDashboard = () => {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const response =
                    await getManagerDashboard();

                setDashboard(
                    response.data?.data ??
                    response.data ??
                    {}
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load manager dashboard."
                );

            } finally {

                setLoading(false);

            }
        };

        loadDashboard();

    }, []);

    return (
        <>
            <ManagerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Manager Dashboard
                    </h2>

                    <p className="text-muted">
                        Manage BlueWave Carwash &
                        AutoSpa operations.
                    </p>

                </div>

                {loading && (
                    <LoadingSpinner
                        message="Loading manager dashboard..."
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

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Customers"
                                    value={
                                        dashboard?.customers_count ??
                                        dashboard?.total_customers ??
                                        0
                                    }
                                    icon="👥"
                                />
                            </Col>

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Workers"
                                    value={
                                        dashboard?.workers_count ??
                                        dashboard?.total_workers ??
                                        0
                                    }
                                    icon="👨‍🔧"
                                />
                            </Col>

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Bookings"
                                    value={
                                        dashboard?.bookings_count ??
                                        dashboard?.total_bookings ??
                                        0
                                    }
                                    icon="📅"
                                />
                            </Col>

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Orders"
                                    value={
                                        dashboard?.orders_count ??
                                        dashboard?.total_orders ??
                                        0
                                    }
                                    icon="🛒"
                                />
                            </Col>

                        </Row>

                        <Row className="g-3 mb-4">

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Products"
                                    value={
                                        dashboard?.products_count ??
                                        dashboard?.total_products ??
                                        0
                                    }
                                    icon="📦"
                                />
                            </Col>

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Services"
                                    value={
                                        dashboard?.services_count ??
                                        dashboard?.total_services ??
                                        0
                                    }
                                    icon="🚘"
                                />
                            </Col>

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Reviews"
                                    value={
                                        dashboard?.reviews_count ??
                                        dashboard?.total_reviews ??
                                        0
                                    }
                                    icon="⭐"
                                />
                            </Col>

                            <Col md={6} xl={3}>
                                <ManagerStatCard
                                    title="Revenue"
                                    value={
                                        `KES ${
                                            Number(
                                                dashboard?.revenue ??
                                                dashboard?.total_revenue ??
                                                0
                                            ).toLocaleString()
                                        }`
                                    }
                                    icon="💰"
                                />
                            </Col>

                        </Row>

                        <Card className="border-0 shadow-sm">

                            <Card.Body>

                                <h5 className="fw-bold mb-3">
                                    Management
                                </h5>

                                <div className="d-flex flex-wrap gap-2">

                                    <Button
                                        as={Link}
                                        to="/manager/customers"
                                        variant="primary"
                                    >
                                        Manage Customers
                                    </Button>

                                    <Button
                                        as={Link}
                                        to="/manager/workers"
                                        variant="primary"
                                    >
                                        Manage Workers
                                    </Button>

                                    <Button
                                        as={Link}
                                        to="/manager/bookings"
                                        variant="outline-primary"
                                    >
                                        Manage Bookings
                                    </Button>

                                    <Button
                                        as={Link}
                                        to="/manager/products"
                                        variant="outline-primary"
                                    >
                                        Manage Products
                                    </Button>

                                    <Button
                                        as={Link}
                                        to="/manager/reports"
                                        variant="outline-primary"
                                    >
                                        View Reports
                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>
                    </>
                )}

            </Container>
        </>
    );
};

export default ManagerDashboard;
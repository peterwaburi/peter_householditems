import {
    Container,
    Row,
    Col,
    Card,
    Table,
    Badge,
    Button
} from "react-bootstrap";

import {
    FaUsers,
    FaCar,
    FaUserTie,
    FaMoneyBillWave,
    FaChartLine,
    FaBoxes
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getManagerDashboard } from "../../api/dashboard";
import { getBookings } from "../../api/bookings";

import ManagerStatCard from "../../components/ManagerStatCard";

import "../../styles/manager.css";

function ManagerDashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({
        users: 0,
        bookings: 0,
        products: 0,
        revenue: 0
    });

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                setLoading(true);

                const [
                    dashboardResponse,
                    bookingsResponse
                ] = await Promise.all([

                    getManagerDashboard(),

                    getBookings()

                ]);

                const dashboardData =
                    dashboardResponse.data?.data || {};

                const bookingData =
                    bookingsResponse.data?.data ||
                    bookingsResponse.data?.bookings ||
                    bookingsResponse.data ||
                    [];

                setStats({

                    users:
                        dashboardData.users || 0,

                    bookings:
                        dashboardData.bookings || 0,

                    products:
                        dashboardData.products || 0,

                    revenue:
                        dashboardData.revenue || 0

                });

                setBookings(

                    Array.isArray(bookingData)
                        ? bookingData.slice(0, 5)
                        : []

                );

            } catch (err) {

                setError(

                    err.response?.data?.message ||
                    "Unable to load manager dashboard."

                );

            } finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    return (

        <Container fluid className="py-4">

            <h2 className="fw-bold text-primary mb-4">

                Manager Dashboard

            </h2>

            {error && (

                <div className="alert alert-danger">

                    {error}

                </div>

            )}

            {loading && (

                <div className="alert alert-info">

                    Loading dashboard...

                </div>

            )}

            <Row className="g-4">

                <Col lg={3} md={6}>

                    <ManagerStatCard
                        title="Customers"
                        value={stats.users}
                        color="#0F4C81"
                        icon={
                            <FaUsers color="white" />
                        }
                    />

                </Col>

                <Col lg={3} md={6}>

                    <ManagerStatCard
                        title="Bookings"
                        value={stats.bookings}
                        color="#198754"
                        icon={
                            <FaCar color="white" />
                        }
                    />

                </Col>

                <Col lg={3} md={6}>

                    <ManagerStatCard
                        title="Products"
                        value={stats.products}
                        color="#fd7e14"
                        icon={
                            <FaBoxes color="white" />
                        }
                    />

                </Col>

                <Col lg={3} md={6}>

                    <ManagerStatCard
                        title="Revenue"
                        value={`KES ${Number(
                            stats.revenue || 0
                        ).toLocaleString()}`}
                        color="#dc3545"
                        icon={
                            <FaMoneyBillWave color="white" />
                        }
                    />

                </Col>

            </Row>

            <Row className="mt-5">

                <Col lg={8}>

                    <Card className="shadow-sm border-0">

                        <Card.Header className="bg-white fw-bold">

                            Latest Bookings

                        </Card.Header>

                        <Card.Body>

                            <Table
                                hover
                                responsive
                            >

                                <thead>

                                    <tr>

                                        <th>
                                            Customer
                                        </th>

                                        <th>
                                            Service
                                        </th>

                                        <th>
                                            Date
                                        </th>

                                        <th>
                                            Status
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {bookings.length === 0 ? (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center"
                                            >

                                                No bookings found.

                                            </td>

                                        </tr>

                                    ) : (

                                        bookings.map(
                                            (booking, index) => (

                                                <tr
                                                    key={
                                                        booking.id ||
                                                        index
                                                    }
                                                >

                                                    <td>

                                                        {
                                                            booking.customer_name ||
                                                            booking.customer ||
                                                            booking.customer_id ||
                                                            "-"
                                                        }

                                                    </td>

                                                    <td>

                                                        {
                                                            booking.service_name ||
                                                            booking.service ||
                                                            booking.service_id ||
                                                            "-"
                                                        }

                                                    </td>

                                                    <td>

                                                        {
                                                            booking.booking_date ||
                                                            booking.date ||
                                                            "-"
                                                        }

                                                    </td>

                                                    <td>

                                                        <Badge
                                                            bg={
                                                                booking.status ===
                                                                "Completed"
                                                                    ? "success"
                                                                    : booking.status ===
                                                                      "Cancelled"
                                                                    ? "danger"
                                                                    : booking.status ===
                                                                      "Pending"
                                                                    ? "warning"
                                                                    : "primary"
                                                            }
                                                        >

                                                            {
                                                                booking.status ||
                                                                "Pending"
                                                            }

                                                        </Badge>

                                                    </td>

                                                </tr>

                                            )
                                        )

                                    )}

                                </tbody>

                            </Table>

                        </Card.Body>

                    </Card>

                </Col>

                <Col lg={4}>

                    <Card className="shadow-sm border-0">

                        <Card.Header className="bg-white fw-bold">

                            Quick Actions

                        </Card.Header>

                        <Card.Body className="d-grid gap-3">

                            <Button
                                variant="primary"
                                onClick={() =>
                                    navigate(
                                        "/manager/customers"
                                    )
                                }
                            >

                                <FaUsers className="me-2" />

                                Manage Customers

                            </Button>

                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    navigate(
                                        "/manager/workers"
                                    )
                                }
                            >

                                <FaUserTie className="me-2" />

                                Manage Workers

                            </Button>

                            <Button
                                variant="outline-success"
                                onClick={() =>
                                    navigate(
                                        "/manager/reports"
                                    )
                                }
                            >

                                View Reports

                            </Button>

                            <Button
                                variant="outline-dark"
                                onClick={() =>
                                    navigate(
                                        "/manager/analytics"
                                    )
                                }
                            >

                                <FaChartLine className="me-2" />

                                Analytics

                            </Button>

                            <Button
                                variant="outline-warning"
                                onClick={() =>
                                    navigate(
                                        "/manager/products"
                                    )
                                }
                            >

                                <FaBoxes className="me-2" />

                                Manage Products

                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

}

export default ManagerDashboard;
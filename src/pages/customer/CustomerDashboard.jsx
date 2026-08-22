import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Table,
    Badge
} from "react-bootstrap";

import {
    FaCalendarAlt,
    FaCar,
    FaShoppingCart,
    FaStar
} from "react-icons/fa";

import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import DashboardCard from "../../components/DashboardCard";

import {
    getCustomerDashboard
} from "../../api/dashboard";

import {
    getBookings
} from "../../api/bookings";

import "../../styles/dashboard.css";

function CustomerDashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({

        bookings: 0,

        vehicles: 0,

        orders: 0,

        reviews: 0

    });

    const [bookings, setBookings] = useState([]);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const [
                    dashboardResponse,
                    bookingsResponse
                ] = await Promise.all([

                    getCustomerDashboard(),

                    getBookings()

                ]);

                const dashboardData =
                    dashboardResponse.data?.data ||
                    {};

                const bookingData =
                    bookingsResponse.data?.data ||
                    bookingsResponse.data?.bookings ||
                    bookingsResponse.data ||
                    [];

                setStats({

                    bookings:
                        dashboardData.bookings || 0,

                    vehicles:
                        dashboardData.vehicles || 0,

                    orders:
                        dashboardData.orders || 0,

                    reviews:
                        dashboardData.reviews || 0

                });

                setBookings(

                    Array.isArray(bookingData)
                        ? bookingData.slice(0, 5)
                        : []

                );

            } catch (err) {

                setError(

                    err.response?.data?.message ||
                    "Unable to load dashboard."

                );

            }

        };

        loadDashboard();

    }, []);

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">

                Customer Dashboard

            </h2>

            {error && (

                <div className="alert alert-danger">

                    {error}

                </div>

            )}

            <Row className="g-4">

                <Col md={3}>

                    <DashboardCard
                        title="Bookings"
                        value={stats.bookings}
                        color="#0F4C81"
                        icon={
                            <FaCalendarAlt color="white" />
                        }
                    />

                </Col>

                <Col md={3}>

                    <DashboardCard
                        title="Vehicles"
                        value={stats.vehicles}
                        color="#198754"
                        icon={
                            <FaCar color="white" />
                        }
                    />

                </Col>

                <Col md={3}>

                    <DashboardCard
                        title="Orders"
                        value={stats.orders}
                        color="#fd7e14"
                        icon={
                            <FaShoppingCart color="white" />
                        }
                    />

                </Col>

                <Col md={3}>

                    <DashboardCard
                        title="Reviews"
                        value={stats.reviews}
                        color="#6f42c1"
                        icon={
                            <FaStar color="white" />
                        }
                    />

                </Col>

            </Row>

            <Row className="mt-5">

                <Col lg={8}>

                    <Card className="shadow-sm border-0">

                        <Card.Header className="bg-white fw-bold">

                            Recent Bookings

                        </Card.Header>

                        <Card.Body>

                            <Table
                                responsive
                                hover
                            >

                                <thead>

                                    <tr>

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
                                                colSpan="3"
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
                                                            booking.service_name ||
                                                            booking.service ||
                                                            booking.service_id ||
                                                            "Service"
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
                                        "/book-service"
                                    )
                                }
                            >

                                Book Service

                            </Button>

                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    navigate(
                                        "/products-and-services"
                                    )
                                }
                            >

                                Shop Products

                            </Button>

                            <Button
                                variant="outline-success"
                                onClick={() =>
                                    navigate("/orders")
                                }
                            >

                                View Orders

                            </Button>

                            <Button
                                variant="outline-dark"
                                onClick={() =>
                                    navigate(
                                        "/profile"
                                    )
                                }
                            >

                                Edit Profile

                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

}

export default CustomerDashboard;
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

import DashboardCard from "../../components/DashboardCard";
import "../../styles/dashboard.css";

function CustomerDashboard() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customer Dashboard
            </h2>

            <Row className="g-4">

                <Col md={3}>
                    <DashboardCard
                        title="Bookings"
                        value="12"
                        color="#0F4C81"
                        icon={<FaCalendarAlt color="white" />}
                    />
                </Col>

                <Col md={3}>
                    <DashboardCard
                        title="Vehicles"
                        value="2"
                        color="#198754"
                        icon={<FaCar color="white" />}
                    />
                </Col>

                <Col md={3}>
                    <DashboardCard
                        title="Orders"
                        value="5"
                        color="#fd7e14"
                        icon={<FaShoppingCart color="white" />}
                    />
                </Col>

                <Col md={3}>
                    <DashboardCard
                        title="Loyalty Points"
                        value="320"
                        color="#6f42c1"
                        icon={<FaStar color="white" />}
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

                            <Table responsive hover>

                                <thead>

                                    <tr>
                                        <th>Service</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Exterior Wash</td>
                                        <td>02 Aug 2026</td>
                                        <td>
                                            <Badge bg="success">
                                                Completed
                                            </Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Interior Cleaning</td>
                                        <td>05 Aug 2026</td>
                                        <td>
                                            <Badge bg="warning">
                                                Pending
                                            </Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Full Detailing</td>
                                        <td>10 Aug 2026</td>
                                        <td>
                                            <Badge bg="primary">
                                                Scheduled
                                            </Badge>
                                        </td>
                                    </tr>

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

                            <Button variant="primary">
                                Book Service
                            </Button>

                            <Button variant="outline-primary">
                                Shop Products
                            </Button>

                            <Button variant="outline-success">
                                View Orders
                            </Button>

                            <Button variant="outline-dark">
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
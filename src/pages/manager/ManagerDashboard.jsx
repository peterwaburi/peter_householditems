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

import ManagerStatCard from "../../components/ManagerStatCard";
import "../../styles/manager.css";

function ManagerDashboard() {

    return (

        <Container fluid className="py-4">

            <h2 className="fw-bold text-primary mb-4">
                Manager Dashboard
            </h2>

            <Row className="g-4">

                <Col lg={2} md={4}>
                    <ManagerStatCard
                        title="Customers"
                        value="1,258"
                        color="#0F4C81"
                        icon={<FaUsers color="white" />}
                    />
                </Col>

                <Col lg={2} md={4}>
                    <ManagerStatCard
                        title="Bookings"
                        value="346"
                        color="#198754"
                        icon={<FaCar color="white" />}
                    />
                </Col>

                <Col lg={2} md={4}>
                    <ManagerStatCard
                        title="Workers"
                        value="18"
                        color="#6f42c1"
                        icon={<FaUserTie color="white" />}
                    />
                </Col>

                <Col lg={2} md={4}>
                    <ManagerStatCard
                        title="Products"
                        value="84"
                        color="#fd7e14"
                        icon={<FaBoxes color="white" />}
                    />
                </Col>

                <Col lg={2} md={4}>
                    <ManagerStatCard
                        title="Revenue"
                        value="KES 245K"
                        color="#dc3545"
                        icon={<FaMoneyBillWave color="white" />}
                    />
                </Col>

                <Col lg={2} md={4}>
                    <ManagerStatCard
                        title="Growth"
                        value="+18%"
                        color="#20c997"
                        icon={<FaChartLine color="white" />}
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

                            <Table hover responsive>

                                <thead>

                                    <tr>
                                        <th>Customer</th>
                                        <th>Service</th>
                                        <th>Status</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Peter</td>
                                        <td>Full Detailing</td>
                                        <td><Badge bg="success">Completed</Badge></td>
                                    </tr>

                                    <tr>
                                        <td>Jane</td>
                                        <td>Exterior Wash</td>
                                        <td><Badge bg="warning">Pending</Badge></td>
                                    </tr>

                                    <tr>
                                        <td>Brian</td>
                                        <td>Home Carpet Cleaning</td>
                                        <td><Badge bg="primary">Scheduled</Badge></td>
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
                                Manage Customers
                            </Button>

                            <Button variant="outline-primary">
                                Manage Workers
                            </Button>

                            <Button variant="outline-success">
                                View Reports
                            </Button>

                            <Button variant="outline-dark">
                                Analytics
                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

}

export default ManagerDashboard;
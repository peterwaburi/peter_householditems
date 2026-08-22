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
    FaCar,
    FaCalendarAlt,
    FaClipboardCheck,
    FaClock
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getWorkerDashboard } from "../../api/dashboard";
import { getBookings } from "../../api/bookings";
import { getSchedules } from "../../api/schedules";

import "../../styles/workerDashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({
        assigned_jobs: 0,
        schedule: 0,
        attendance: 0
    });

    const [bookings, setBookings] = useState([]);

    const [schedules, setSchedules] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                setLoading(true);

                const [
                    dashboardResponse,
                    bookingsResponse,
                    schedulesResponse
                ] = await Promise.all([

                    getWorkerDashboard(),

                    getBookings(),

                    getSchedules()

                ]);

                const dashboardData =
                    dashboardResponse.data?.data || {};

                const bookingData =
                    bookingsResponse.data?.data ||
                    bookingsResponse.data?.bookings ||
                    bookingsResponse.data ||
                    [];

                const scheduleData =
                    schedulesResponse.data?.data ||
                    schedulesResponse.data?.schedules ||
                    schedulesResponse.data ||
                    [];

                setStats({

                    assigned_jobs:
                        dashboardData.assigned_jobs || 0,

                    schedule:
                        dashboardData.schedule || 0,

                    attendance:
                        dashboardData.attendance || 0

                });

                setBookings(

                    Array.isArray(bookingData)
                        ? bookingData.slice(0, 5)
                        : []

                );

                setSchedules(

                    Array.isArray(scheduleData)
                        ? scheduleData.slice(0, 5)
                        : []

                );

            } catch (err) {

                setError(

                    err.response?.data?.message ||
                    "Unable to load worker dashboard."

                );

            } finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    return (

        <Container className="worker-dashboard py-5">

            <h2 className="fw-bold text-primary mb-4">

                Worker Dashboard

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

            <Row className="g-4 mb-5">

                <Col md={4}>

                    <Card className="shadow-sm border-0 h-100">

                        <Card.Body>

                            <div className="d-flex justify-content-between">

                                <div>

                                    <h6 className="text-muted">

                                        Assigned Jobs

                                    </h6>

                                    <h2 className="fw-bold">

                                        {
                                            stats.assigned_jobs
                                        }

                                    </h2>

                                </div>

                                <FaCar
                                    size={32}
                                    className="text-primary"
                                />

                            </div>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={4}>

                    <Card className="shadow-sm border-0 h-100">

                        <Card.Body>

                            <div className="d-flex justify-content-between">

                                <div>

                                    <h6 className="text-muted">

                                        Schedule

                                    </h6>

                                    <h2 className="fw-bold">

                                        {stats.schedule}

                                    </h2>

                                </div>

                                <FaCalendarAlt
                                    size={32}
                                    className="text-success"
                                />

                            </div>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={4}>

                    <Card className="shadow-sm border-0 h-100">

                        <Card.Body>

                            <div className="d-flex justify-content-between">

                                <div>

                                    <h6 className="text-muted">

                                        Attendance

                                    </h6>

                                    <h2 className="fw-bold">

                                        {stats.attendance}

                                    </h2>

                                </div>

                                <FaClipboardCheck
                                    size={32}
                                    className="text-warning"
                                />

                            </div>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

            <Row>

                <Col lg={8}>

                    <Card className="shadow-sm border-0">

                        <Card.Header className="bg-white fw-bold">

                            Assigned Jobs

                        </Card.Header>

                        <Card.Body>

                            <Table
                                responsive
                                hover
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

                                                No assigned jobs.

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
                                                                    : "warning"
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

                            Today's Schedule

                        </Card.Header>

                        <Card.Body>

                            {schedules.length === 0 ? (

                                <p className="text-muted">

                                    No schedule available.

                                </p>

                            ) : (

                                schedules.map(
                                    (schedule, index) => (

                                        <div
                                            key={
                                                schedule.id ||
                                                index
                                            }
                                            className="border-bottom py-3"
                                        >

                                            <div className="d-flex justify-content-between">

                                                <strong>

                                                    {
                                                        schedule.work_date ||
                                                        "-"
                                                    }

                                                </strong>

                                                <FaClock />

                                            </div>

                                            <small className="text-muted">

                                                {
                                                    schedule.start_time ||
                                                    "-"
                                                }

                                                {" - "}

                                                {
                                                    schedule.end_time ||
                                                    "-"
                                                }

                                            </small>

                                        </div>

                                    )
                                )

                            )}

                            <Button
                                className="w-100 mt-3"
                                variant="outline-primary"
                                onClick={() =>
                                    navigate(
                                        "/worker/jobs"
                                    )
                                }
                            >

                                View Assigned Jobs

                            </Button>

                            <Button
                                className="w-100 mt-2"
                                variant="outline-success"
                                onClick={() =>
                                    navigate(
                                        "/worker/attendance"
                                    )
                                }
                            >

                                Attendance

                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

}

export default Dashboard;
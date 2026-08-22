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

import WorkerNavbar from "./WorkerNavbar";
import DashboardCard from "./DashboardCard";
import LoadingSpinner from "./LoadingSpinner";

import {
    getWorkerDashboard
} from "../api/workerDashboard";

const WorkerDashboard = () => {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const response =
                    await getWorkerDashboard();

                setDashboard(
                    response.data?.data ??
                    response.data ??
                    {}
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load worker dashboard."
                );

            } finally {

                setLoading(false);

            }
        };

        loadDashboard();

    }, []);

    return (
        <>
            <WorkerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Worker Dashboard
                    </h2>

                    <p className="text-muted">
                        View your assigned jobs,
                        schedules and attendance.
                    </p>

                </div>

                {loading && (
                    <LoadingSpinner
                        message="Loading worker dashboard..."
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
                                    title="Assigned Jobs"
                                    value={
                                        dashboard?.jobs_count ??
                                        dashboard?.assigned_jobs ??
                                        0
                                    }
                                    icon="🔧"
                                />
                            </Col>

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Completed"
                                    value={
                                        dashboard?.completed_count ??
                                        dashboard?.completed_jobs ??
                                        0
                                    }
                                    icon="✓"
                                />
                            </Col>

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Pending"
                                    value={
                                        dashboard?.pending_count ??
                                        dashboard?.pending_jobs ??
                                        0
                                    }
                                    icon="⏳"
                                />
                            </Col>

                            <Col md={6} lg={3}>
                                <DashboardCard
                                    title="Schedules"
                                    value={
                                        dashboard?.schedule_count ??
                                        dashboard?.total_schedules ??
                                        0
                                    }
                                    icon="📅"
                                />
                            </Col>

                        </Row>

                        <Row className="g-4">

                            <Col md={6}>

                                <Card className="border-0 shadow-sm h-100">

                                    <Card.Body>

                                        <h5>
                                            Assigned Jobs
                                        </h5>

                                        <p className="text-muted">
                                            View customer bookings
                                            assigned to you.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/worker/jobs"
                                            variant="primary"
                                        >
                                            View Jobs
                                        </Button>

                                    </Card.Body>

                                </Card>

                            </Col>

                            <Col md={6}>

                                <Card className="border-0 shadow-sm h-100">

                                    <Card.Body>

                                        <h5>
                                            Work Schedule
                                        </h5>

                                        <p className="text-muted">
                                            Check your upcoming
                                            work schedule.
                                        </p>

                                        <Button
                                            as={Link}
                                            to="/worker/schedule"
                                            variant="outline-primary"
                                        >
                                            View Schedule
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

export default WorkerDashboard;
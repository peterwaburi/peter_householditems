import { Container } from "react-bootstrap";

import WorkerStats from "../../components/WorkerStats";
import TodaysSchedule from "../../components/TodaysSchedule";
import CompletedJobs from "../../components/CompletedJobs";

import "../../styles/workerDashboard.css";

function Dashboard() {

    return (

        <Container className="worker-dashboard py-5">

            <h2 className="fw-bold text-primary mb-4">
                Worker Dashboard
            </h2>

            <WorkerStats />

            <div className="mb-4">
                <TodaysSchedule />
            </div>

            <div className="mb-4">
                <CompletedJobs />
            </div>

        </Container>

    );

}

export default Dashboard;
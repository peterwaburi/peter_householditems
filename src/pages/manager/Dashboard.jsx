import { Container } from "react-bootstrap";

import RevenueOverview from "../../components/RevenueOverview";
import LiveQueue from "../../components/LiveQueue";
import RecentBookings from "../../components/RecentBookings";
import WorkerPerformance from "../../components/WorkerPerformance";
import QuickActions from "../../components/QuickActions";
import TopServices from "../../components/TopServices";
import SystemStatus from "../../components/SystemStatus";

import "../../styles/dashboard.css";

function Dashboard() {

    return (

        <Container className="manager-dashboard py-5">

            <h2 className="fw-bold text-primary mb-4">
                Manager Dashboard
            </h2>

            <RevenueOverview />

            <QuickActions />

            <div className="my-4">
                <LiveQueue />
            </div>

            <div className="my-4">
                <RecentBookings />
            </div>

            <div className="my-4">
                <WorkerPerformance />
            </div>

            <div className="my-4">
                <TopServices />
            </div>

            <div className="my-4">
                <SystemStatus />
            </div>

        </Container>

    );

}

export default Dashboard;
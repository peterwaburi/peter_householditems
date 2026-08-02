import { Container } from "react-bootstrap";
import AnalyticsCards from "../../components/AnalyticsCards";

function Analytics() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Analytics
            </h2>

            <AnalyticsCards />

        </Container>

    );

}

export default Analytics;
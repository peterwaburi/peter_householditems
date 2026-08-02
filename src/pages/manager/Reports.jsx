import { Container } from "react-bootstrap";
import ReportsCards from "../../components/ReportsCards";

function Reports() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Reports
            </h2>

            <ReportsCards />

        </Container>

    );

}

export default Reports;
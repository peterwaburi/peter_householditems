import { Container } from "react-bootstrap";
import FleetTable from "../../components/FleetTable";

function FleetManagement() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Fleet Management
            </h2>

            <FleetTable />

        </Container>

    );

}

export default FleetManagement;
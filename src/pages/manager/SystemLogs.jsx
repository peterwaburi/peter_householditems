import { Container } from "react-bootstrap";
import SystemLogTable from "../../components/SystemLogTable";

function SystemLogs() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">

                System Logs

            </h2>

            <SystemLogTable />

        </Container>

    );

}

export default SystemLogs;
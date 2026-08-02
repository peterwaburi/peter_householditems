import { Container } from "react-bootstrap";
import WorkersTable from "../../components/WorkersTable";

function Workers() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Worker Management
            </h2>

            <WorkersTable />

        </Container>

    );

}

export default Workers;
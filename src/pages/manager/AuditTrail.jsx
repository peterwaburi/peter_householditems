import { Container } from "react-bootstrap";
import AuditTrailTable from "../../components/AuditTrailTable";
import "../../styles/security.css";

function AuditTrail() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Audit Trail
            </h2>

            <AuditTrailTable/>

        </Container>

    );

}

export default AuditTrail;
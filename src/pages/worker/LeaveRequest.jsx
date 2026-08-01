import { Container } from "react-bootstrap";
import LeaveRequestForm from "../../components/LeaveRequestForm";

function LeaveRequest() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Leave Request
            </h2>

            <LeaveRequestForm/>

        </Container>

    );

}

export default LeaveRequest;
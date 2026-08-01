import { Container } from "react-bootstrap";
import SupportTicketForm from "../../components/SupportTicketForm";
import "../../styles/support.css";

function Support() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customer Support
            </h2>

            <SupportTicketForm />

        </Container>

    );

}

export default Support;
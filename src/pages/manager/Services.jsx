import { Container } from "react-bootstrap";
import ServicesTable from "../../components/ServicesTable";

function Services() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Service Management
            </h2>

            <ServicesTable />

        </Container>

    );

}

export default Services;
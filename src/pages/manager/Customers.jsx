import { Container } from "react-bootstrap";
import CustomersTable from "../../components/CustomersTable";

function Customers() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customer Management
            </h2>

            <CustomersTable />

        </Container>

    );

}

export default Customers;
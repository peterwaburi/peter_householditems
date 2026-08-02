import { Container } from "react-bootstrap";
import SupplierTable from "../../components/SupplierTable";

function Suppliers() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Suppliers
            </h2>

            <SupplierTable />

        </Container>

    );

}

export default Suppliers;
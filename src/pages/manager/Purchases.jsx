import { Container } from "react-bootstrap";
import PurchaseTable from "../../components/PurchaseTable";

function Purchases() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Purchases
            </h2>

            <PurchaseTable />

        </Container>

    );

}

export default Purchases;
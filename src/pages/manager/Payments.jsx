import { Container } from "react-bootstrap";
import PaymentTable from "../../components/PaymentTable";

function Payments(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Payments
            </h2>

            <PaymentTable/>

        </Container>

    );

}

export default Payments;
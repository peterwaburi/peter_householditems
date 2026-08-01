import { Container } from "react-bootstrap";
import EarningsCard from "../../components/EarningsCard";

function Earnings() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Earnings
            </h2>

            <EarningsCard />

        </Container>

    );

}

export default Earnings;
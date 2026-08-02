import { Container } from "react-bootstrap";
import DiscountTable from "../../components/DiscountTable";

function Discounts() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Discounts & Coupons
            </h2>

            <DiscountTable />

        </Container>

    );

}

export default Discounts;
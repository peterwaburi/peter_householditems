import { Container } from "react-bootstrap";
import FAQAccordion from "../../components/FAQAccordion";
import "../../styles/support.css";

function FAQs() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Frequently Asked Questions
            </h2>

            <FAQAccordion />

        </Container>

    );

}

export default FAQs;
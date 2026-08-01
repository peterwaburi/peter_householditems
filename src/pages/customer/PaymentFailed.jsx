import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PaymentFailed() {

    return (

        <Container className="py-5">

            <Card className="shadow-sm border-0 text-center">

                <Card.Body className="p-5">

                    <h1 className="text-danger mb-4">
                        ✗ Payment Failed
                    </h1>

                    <p className="lead">
                        Your payment was not completed.
                    </p>

                    <Button
                        as={Link}
                        to="/customer/checkout"
                        variant="danger"
                    >
                        Try Again
                    </Button>

                </Card.Body>

            </Card>

        </Container>

    );

}

export default PaymentFailed;
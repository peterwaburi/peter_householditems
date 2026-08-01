import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PaymentSuccess() {

    return (

        <Container className="py-5">

            <Card className="shadow-sm border-0 text-center">

                <Card.Body className="p-5">

                    <h1 className="text-success mb-4">
                        ✓ Payment Successful
                    </h1>

                    <p className="lead">
                        Your payment has been received successfully.
                    </p>

                    <Button
                        as={Link}
                        to="/customer/dashboard"
                        variant="success"
                    >
                        Go to Dashboard
                    </Button>

                </Card.Body>

            </Card>

        </Container>

    );

}

export default PaymentSuccess;
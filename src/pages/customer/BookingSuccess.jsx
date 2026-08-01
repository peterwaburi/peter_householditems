import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookingSuccess() {

    return (

        <Container className="py-5">

            <Card className="shadow-sm border-0 text-center">

                <Card.Body className="p-5">

                    <h1 className="text-primary mb-4">
                        Booking Confirmed
                    </h1>

                    <p className="lead">
                        Your booking has been received successfully.
                    </p>

                    <Button
                        as={Link}
                        to="/customer/dashboard"
                    >
                        View Dashboard
                    </Button>

                </Card.Body>

            </Card>

        </Container>

    );

}

export default BookingSuccess;
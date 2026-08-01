import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <section className="py-5 text-center bg-primary text-white">

            <Container>

                <h2 className="fw-bold">
                    Ready to Experience Premium Car Care?
                </h2>

                <p className="lead mb-4">
                    Book your service today and let BlueWave take care of your vehicle.
                </p>

                <Button
                    as={Link}
                    to="/customer/book"
                    variant="light"
                    size="lg"
                >
                    Book Now
                </Button>

            </Container>

        </section>
    );
}

export default CallToAction;
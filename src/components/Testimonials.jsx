import { Container, Row, Col, Card } from "react-bootstrap";

function Testimonials() {

    const reviews = [
        {
            name: "John Mwangi",
            review: "Excellent service. My car looked brand new."
        },
        {
            name: "Mercy Wanjiru",
            review: "Very professional team and affordable prices."
        },
        {
            name: "Kevin Otieno",
            review: "Highly recommend their detailing package."
        }
    ];

    return (
        <section className="py-5">
            <Container>

                <h2 className="text-center fw-bold text-primary mb-5">
                    Customer Reviews
                </h2>

                <Row>

                    {reviews.map((item, index) => (

                        <Col md={4} key={index} className="mb-4">

                            <Card className="shadow-sm border-0 h-100">

                                <Card.Body>

                                    <Card.Text>
                                        "{item.review}"
                                    </Card.Text>

                                    <h6 className="mt-3 text-primary">
                                        {item.name}
                                    </h6>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>
        </section>
    );
}

export default Testimonials;
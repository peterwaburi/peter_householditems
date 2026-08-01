import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import CheckoutSummary from "../../components/CheckoutSummary";
import PaymentMethodCard from "../../components/PaymentMethodCard";
import "../../styles/checkout.css";

function Checkout() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Checkout
            </h2>

            <Row>

                <Col lg={8}>

                    <Card className="shadow-sm border-0 mb-4">

                        <Card.Body>

                            <h4 className="mb-4">
                                Customer Details
                            </h4>

                            <Form>

                                <Row>

                                    <Col md={6}>

                                        <Form.Group className="mb-3">

                                            <Form.Label>Name</Form.Label>

                                            <Form.Control />

                                        </Form.Group>

                                    </Col>

                                    <Col md={6}>

                                        <Form.Group className="mb-3">

                                            <Form.Label>Phone</Form.Label>

                                            <Form.Control />

                                        </Form.Group>

                                    </Col>

                                </Row>

                                <Form.Group className="mb-3">

                                    <Form.Label>Email</Form.Label>

                                    <Form.Control />

                                </Form.Group>

                            </Form>

                        </Card.Body>

                    </Card>

                    <PaymentMethodCard/>

                    <Button
                        className="w-100 mt-4"
                        size="lg"
                    >
                        Complete Payment
                    </Button>

                </Col>

                <Col lg={4}>

                    <CheckoutSummary/>

                </Col>

            </Row>

        </Container>

    );

}

export default Checkout;
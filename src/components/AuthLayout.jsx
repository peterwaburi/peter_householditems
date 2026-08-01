import { Container, Row, Col, Card } from "react-bootstrap";

function AuthLayout({ title, children }) {
    return (
        <Container fluid className="auth-page">
            <Row className="justify-content-center align-items-center min-vh-100">

                <Col lg={5} md={7}>

                    <Card className="shadow border-0">

                        <Card.Body className="p-5">

                            <h2 className="text-center text-primary mb-4">
                                {title}
                            </h2>

                            {children}

                        </Card.Body>

                    </Card>

                </Col>

            </Row>
        </Container>
    );
}

export default AuthLayout;
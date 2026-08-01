import { Container, Row, Col, Card } from "react-bootstrap";

function SocialMedia(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Social Media Overview
            </h2>

            <Row>

                <Col md={3}>

                    <Card className="shadow-sm border-0 text-center mb-4">

                        <Card.Body>

                            <h3>Facebook</h3>

                            <h2>8,450</h2>

                            <p>Followers</p>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={3}>

                    <Card className="shadow-sm border-0 text-center mb-4">

                        <Card.Body>

                            <h3>Instagram</h3>

                            <h2>6,120</h2>

                            <p>Followers</p>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={3}>

                    <Card className="shadow-sm border-0 text-center mb-4">

                        <Card.Body>

                            <h3>X</h3>

                            <h2>2,430</h2>

                            <p>Followers</p>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={3}>

                    <Card className="shadow-sm border-0 text-center mb-4">

                        <Card.Body>

                            <h3>TikTok</h3>

                            <h2>4,890</h2>

                            <p>Followers</p>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );

}

export default SocialMedia;
import { Card, Row, Col } from "react-bootstrap";

function EarningsCard() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Earnings Summary
                </h4>

                <Row>

                    <Col md={4}>

                        <h2 className="text-success">
                            KES 4,800
                        </h2>

                        <p>Today</p>

                    </Col>

                    <Col md={4}>

                        <h2 className="text-primary">
                            KES 27,500
                        </h2>

                        <p>This Week</p>

                    </Col>

                    <Col md={4}>

                        <h2 className="text-warning">
                            KES 95,300
                        </h2>

                        <p>This Month</p>

                    </Col>

                </Row>

            </Card.Body>

        </Card>

    );

}

export default EarningsCard;
import { Card, Row, Col } from "react-bootstrap";

function RevenueOverview() {

    return(

        <Row>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-success">
                            KES 45K
                        </h2>

                        <p>Today</p>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-primary">
                            KES 243K
                        </h2>

                        <p>This Week</p>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-warning">
                            KES 975K
                        </h2>

                        <p>This Month</p>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-danger">
                            KES 8.2M
                        </h2>

                        <p>This Year</p>

                    </Card.Body>

                </Card>

            </Col>

        </Row>

    );

}

export default RevenueOverview;
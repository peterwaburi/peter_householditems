import { Card, Row, Col } from "react-bootstrap";

function CustomerStatistics() {

    return (

        <Row>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-primary">
                            18
                        </h2>

                        <p>Total Bookings</p>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-success">
                            12
                        </h2>

                        <p>Completed</p>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-warning">
                            2
                        </h2>

                        <p>Pending</p>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={3}>

                <Card className="shadow-sm border-0 text-center mb-4">

                    <Card.Body>

                        <h2 className="text-danger">
                            320
                        </h2>

                        <p>Loyalty Points</p>

                    </Card.Body>

                </Card>

            </Col>

        </Row>

    );

}

export default CustomerStatistics;
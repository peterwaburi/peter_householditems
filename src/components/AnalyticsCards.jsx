import { Row, Col, Card, ProgressBar } from "react-bootstrap";

function AnalyticsCards() {

    return (

        <Row>

            <Col md={4}>

                <Card className="shadow-sm border-0 mb-4">

                    <Card.Body>

                        <h5>Customer Growth</h5>

                        <ProgressBar now={82}/>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={4}>

                <Card className="shadow-sm border-0 mb-4">

                    <Card.Body>

                        <h5>Bookings</h5>

                        <ProgressBar now={74}/>

                    </Card.Body>

                </Card>

            </Col>

            <Col md={4}>

                <Card className="shadow-sm border-0 mb-4">

                    <Card.Body>

                        <h5>Revenue</h5>

                        <ProgressBar now={91}/>

                    </Card.Body>

                </Card>

            </Col>

        </Row>

    );

}

export default AnalyticsCards;
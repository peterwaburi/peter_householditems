import { Card, Row, Col, Badge } from "react-bootstrap";

function AttendanceCard() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Attendance
                </h4>

                <Row>

                    <Col md={4}>

                        <h5>Check In</h5>

                        <Badge bg="success">
                            08:00 AM
                        </Badge>

                    </Col>

                    <Col md={4}>

                        <h5>Check Out</h5>

                        <Badge bg="warning">
                            Pending
                        </Badge>

                    </Col>

                    <Col md={4}>

                        <h5>Status</h5>

                        <Badge bg="primary">
                            Present
                        </Badge>

                    </Col>

                </Row>

            </Card.Body>

        </Card>

    );

}

export default AttendanceCard;
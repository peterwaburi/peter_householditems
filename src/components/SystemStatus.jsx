import { Card, Badge } from "react-bootstrap";

function SystemStatus() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    System Status
                </h4>

                <p className="d-flex justify-content-between">
                    Website
                    <Badge bg="success">Online</Badge>
                </p>

                <p className="d-flex justify-content-between">
                    Booking System
                    <Badge bg="success">Running</Badge>
                </p>

                <p className="d-flex justify-content-between">
                    Payments
                    <Badge bg="warning">Testing</Badge>
                </p>

                <p className="d-flex justify-content-between">
                    Database
                    <Badge bg="secondary">Pending</Badge>
                </p>

            </Card.Body>

        </Card>

    );

}

export default SystemStatus;
import { Card, Badge, Button } from "react-bootstrap";

function WorkerMessageCard({ message }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body className="d-flex justify-content-between align-items-center">

                <div>

                    <h5>{message.sender}</h5>

                    <p className="mb-1">
                        {message.subject}
                    </p>

                    <small className="text-muted">
                        {message.time}
                    </small>

                </div>

                <div>

                    <Badge bg="primary" className="me-2">
                        New
                    </Badge>

                    <Button size="sm">
                        Open
                    </Button>

                </div>

            </Card.Body>

        </Card>

    );

}

export default WorkerMessageCard;
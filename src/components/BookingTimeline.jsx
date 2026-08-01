import { Card, ListGroup } from "react-bootstrap";

function BookingTimeline() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Booking Progress
                </h4>

                <ListGroup variant="flush">

                    <ListGroup.Item>
                        ✓ Booking Submitted
                    </ListGroup.Item>

                    <ListGroup.Item>
                        ✓ Awaiting Confirmation
                    </ListGroup.Item>

                    <ListGroup.Item>
                        ✓ Worker Assigned
                    </ListGroup.Item>

                    <ListGroup.Item>
                        ✓ Service In Progress
                    </ListGroup.Item>

                    <ListGroup.Item>
                        ✓ Completed
                    </ListGroup.Item>

                </ListGroup>

            </Card.Body>

        </Card>

    );

}

export default BookingTimeline;
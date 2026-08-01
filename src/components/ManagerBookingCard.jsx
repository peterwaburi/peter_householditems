import { Card, Badge, Button } from "react-bootstrap";

function ManagerBookingCard({ booking }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>

                        <h5>{booking.customer}</h5>

                        <p>{booking.service}</p>

                        <Badge bg={booking.color}>
                            {booking.status}
                        </Badge>

                    </div>

                    <Button variant="outline-success">
                        Open
                    </Button>

                </div>

            </Card.Body>

        </Card>

    );

}

export default ManagerBookingCard;
import { Card, Badge, Button } from "react-bootstrap";

function ManagerCustomerCard({ customer }) {
    return (
        <Card className="shadow-sm border-0 mb-3">
            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">

                    <div>
                        <h5>{customer.name}</h5>
                        <p className="mb-1">{customer.email}</p>
                        <p className="mb-1">{customer.phone}</p>

                        <Badge bg="primary">
                            {customer.bookings} Bookings
                        </Badge>
                    </div>

                    <Button variant="outline-primary">
                        View
                    </Button>

                </div>

            </Card.Body>
        </Card>
    );
}

export default ManagerCustomerCard;
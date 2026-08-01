import { Card, Badge, Button } from "react-bootstrap";

function OrderCard({ order }) {
    return (
        <Card className="shadow-sm border-0 mb-4">
            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>
                        <h5>{order.title}</h5>
                        <p className="text-muted mb-1">
                            {order.date}
                        </p>

                        <Badge bg={order.statusColor}>
                            {order.status}
                        </Badge>

                    </div>

                    <div className="text-end">

                        <h5 className="text-primary">
                            {order.price}
                        </h5>

                        <Button
                            variant="outline-primary"
                            size="sm"
                        >
                            View
                        </Button>

                    </div>

                </div>

            </Card.Body>
        </Card>
    );
}

export default OrderCard;
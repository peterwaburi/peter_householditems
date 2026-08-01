import { Card, Badge } from "react-bootstrap";

function NotificationItem({ notification }) {
    return (
        <Card className="shadow-sm border-0 mb-3">
            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>
                        <h6>{notification.title}</h6>
                        <p className="text-muted mb-1">
                            {notification.message}
                        </p>
                    </div>

                    <Badge bg={notification.color}>
                        {notification.status}
                    </Badge>

                </div>

            </Card.Body>
        </Card>
    );
}

export default NotificationItem;
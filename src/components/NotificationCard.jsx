import { Card, Badge } from "react-bootstrap";

function NotificationCard({ notification }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body className="d-flex justify-content-between align-items-center">

                <div>

                    <h5>{notification.title}</h5>

                    <p className="mb-1">{notification.message}</p>

                    <small className="text-muted">
                        {notification.time}
                    </small>

                </div>

                <Badge bg={notification.color}>
                    {notification.status}
                </Badge>

            </Card.Body>

        </Card>

    );

}

export default NotificationCard;
import { Card, Badge } from "react-bootstrap";

function AdminNotificationCard({ notification }){

    return(

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body className="d-flex justify-content-between">

                <div>

                    <h5>{notification.title}</h5>

                    <p>{notification.message}</p>

                </div>

                <Badge bg="primary">
                    {notification.time}
                </Badge>

            </Card.Body>

        </Card>

    );

}

export default AdminNotificationCard;
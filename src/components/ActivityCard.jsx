import { Card, Badge } from "react-bootstrap";

function ActivityCard({ activity }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h5>{activity.title}</h5>

                        <p className="mb-1">
                            {activity.description}
                        </p>

                        <small className="text-muted">
                            {activity.date}
                        </small>

                    </div>

                    <Badge bg={activity.color}>
                        {activity.status}
                    </Badge>

                </div>

            </Card.Body>

        </Card>

    );

}

export default ActivityCard;
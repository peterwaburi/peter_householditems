import { Card, Badge } from "react-bootstrap";

function AnnouncementCard({ announcement }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>

                        <h5>{announcement.title}</h5>

                        <p>{announcement.message}</p>

                    </div>

                    <Badge bg="primary">
                        {announcement.date}
                    </Badge>

                </div>

            </Card.Body>

        </Card>

    );

}

export default AnnouncementCard;
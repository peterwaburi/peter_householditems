import { Card, Badge, Button } from "react-bootstrap";

function ReviewCard({ review }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>

                        <h5>{review.customer}</h5>

                        <p className="mb-2">{review.comment}</p>

                        <small>{review.date}</small>

                    </div>

                    <div className="text-end">

                        <Badge bg="warning" text="dark">
                            ⭐ {review.rating}/5
                        </Badge>

                        <br/><br/>

                        <Button
                            size="sm"
                            variant="outline-primary"
                        >
                            Reply
                        </Button>

                    </div>

                </div>

            </Card.Body>

        </Card>

    );

}

export default ReviewCard;
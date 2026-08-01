import { Card } from "react-bootstrap";

function ReviewItem({ review }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <h5>{review.service}</h5>

                <h6 className="text-warning">
                    ⭐ {review.rating}/5
                </h6>

                <p>{review.comment}</p>

            </Card.Body>

        </Card>

    );

}

export default ReviewItem;
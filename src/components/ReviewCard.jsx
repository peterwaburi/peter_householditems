import {
    Card,
    Button
} from "react-bootstrap";

const ReviewCard = ({
    review,
    onDelete
}) => {

    const id =
        review?.id ??
        review?.review_id;

    const name =
        review?.customer_name ??
        review?.user_name ??
        review?.username ??
        "Customer";

    const rating = Math.min(
        5,
        Math.max(
            0,
            Number(
                review?.rating ??
                review?.stars ??
                0
            )
        )
    );

    const comment =
        review?.comment ??
        review?.review ??
        review?.message ??
        "";

    const date =
        review?.created_at ??
        review?.date ??
        "";

    return (
        <Card className="border-0 shadow-sm h-100">

            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>

                        <h6 className="fw-bold mb-1">
                            {name}
                        </h6>

                        <div
                            aria-label={`${rating} out of 5 stars`}
                            className="text-warning"
                        >
                            {"★".repeat(rating)}
                            <span className="text-muted">
                                {"★".repeat(5 - rating)}
                            </span>
                        </div>

                    </div>

                    {date && (
                        <small className="text-muted">
                            {date}
                        </small>
                    )}

                </div>

                <p className="mt-3 mb-0">
                    {comment || "No comment provided."}
                </p>

                {onDelete && id && (

                    <Button
                        variant="outline-danger"
                        size="sm"
                        className="mt-3"
                        onClick={() => onDelete(id)}
                    >
                        Delete Review
                    </Button>

                )}

            </Card.Body>

        </Card>
    );
};

export default ReviewCard;
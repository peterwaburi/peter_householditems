import {
    Row,
    Col,
    Alert
} from "react-bootstrap";

import useReviews from "../hooks/useReviews";

import ReviewCard from "./ReviewCard";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";

const ReviewList = ({
    allowDelete = false
}) => {

    const {
        reviews,
        loading,
        error,
        removeReview
    } = useReviews();

    const handleDelete = async (id) => {

        if (
            !window.confirm(
                "Are you sure you want to delete this review?"
            )
        ) {
            return;
        }

        try {

            await removeReview(id);

        } catch (err) {

            console.error(
                "Unable to delete review:",
                err
            );

        }
    };

    if (loading) {
        return (
            <PageLoader
                message="Loading reviews..."
            />
        );
    }

    if (error) {
        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );
    }

    if (reviews.length === 0) {
        return (
            <EmptyState
                title="No reviews yet"
                message="Customer reviews will appear here."
            />
        );
    }

    return (
        <Row className="g-4">

            {reviews.map((review, index) => (

                <Col
                    key={
                        review.id ??
                        review.review_id ??
                        index
                    }
                    md={6}
                    lg={4}
                >

                    <ReviewCard
                        review={review}
                        onDelete={
                            allowDelete
                                ? handleDelete
                                : null
                        }
                    />

                </Col>

            ))}

        </Row>
    );
};

export default ReviewList;
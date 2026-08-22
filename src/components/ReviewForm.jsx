import { useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert
} from "react-bootstrap";

import useReviews from "../hooks/useReviews";

const ReviewForm = ({
    bookingId = null,
    serviceId = null,
    onSuccess
}) => {

    const {
        addReview
    } = useReviews();

    const [rating, setRating] =
        useState(5);

    const [comment, setComment] =
        useState("");

    const [saving, setSaving] =
        useState(false);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const handleSubmit = async (event) => {

        event.preventDefault();

        setSaving(true);
        setError("");
        setSuccess("");

        try {

            await addReview({
                rating,
                comment,
                booking_id: bookingId,
                service_id: serviceId
            });

            setComment("");
            setRating(5);

            setSuccess(
                "Thank you. Your review has been submitted."
            );

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to submit review."
            );

        } finally {

            setSaving(false);

        }
    };

    return (
        <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                    Leave a Review
                </h4>

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {success && (
                    <Alert variant="success">
                        {success}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Rating
                        </Form.Label>

                        <Form.Select
                            value={rating}
                            onChange={(event) =>
                                setRating(
                                    Number(
                                        event.target.value
                                    )
                                )
                            }
                        >

                            <option value="5">
                                5 - Excellent
                            </option>

                            <option value="4">
                                4 - Very Good
                            </option>

                            <option value="3">
                                3 - Good
                            </option>

                            <option value="2">
                                2 - Fair
                            </option>

                            <option value="1">
                                1 - Poor
                            </option>

                        </Form.Select>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Your Review
                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={comment}
                            onChange={(event) =>
                                setComment(
                                    event.target.value
                                )
                            }
                            placeholder="Tell us about your experience..."
                            required
                        />

                    </Form.Group>

                    <Button
                        type="submit"
                        variant="primary"
                        disabled={saving}
                    >
                        {saving
                            ? "Submitting..."
                            : "Submit Review"}
                    </Button>

                </Form>

            </Card.Body>

        </Card>
    );
};

export default ReviewForm;
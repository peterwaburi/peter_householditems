import {
    useState
} from "react";

import {
    Container,
    Button,
    Modal
} from "react-bootstrap";

import CustomerNavbar from "./CustomerNavbar";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const CustomerReviews = () => {

    const [showForm, setShowForm] =
        useState(false);

    return (
        <>
            <CustomerNavbar />

            <Container className="py-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            My Reviews
                        </h2>

                        <p className="text-muted mb-0">
                            Share your experience with BlueWave.
                        </p>

                    </div>

                    <Button
                        variant="primary"
                        onClick={() =>
                            setShowForm(true)
                        }
                    >
                        Write Review
                    </Button>

                </div>

                <ReviewList />

            </Container>

            <Modal
                show={showForm}
                onHide={() =>
                    setShowForm(false)
                }
                centered
            >

                <Modal.Header closeButton>

                    <Modal.Title>
                        Write a Review
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <ReviewForm
                        onSuccess={() =>
                            setShowForm(false)
                        }
                    />

                </Modal.Body>

            </Modal>

        </>
    );
};

export default CustomerReviews;
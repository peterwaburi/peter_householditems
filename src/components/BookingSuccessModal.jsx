import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookingSuccessModal({ show, onHide }) {

    return (

        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Body className="text-center p-5">

                <h1 className="text-success mb-4">
                    ✓
                </h1>

                <h3>Booking Successful</h3>

                <p>
                    Your booking has been submitted successfully.
                </p>

                <Button
                    as={Link}
                    to="/customer/dashboard"
                    onClick={onHide}
                >
                    Go to Dashboard
                </Button>

            </Modal.Body>

        </Modal>

    );

}

export default BookingSuccessModal;
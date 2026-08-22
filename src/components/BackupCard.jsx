import {
    Card,
    Button,
    Row,
    Col
} from "react-bootstrap";

import {
    Link
} from "react-router-dom";

import StatusBadge from "./StatusBadge";

const BookingCard = ({
    booking,
    onCancel
}) => {

    const id =
        booking?.id ??
        booking?.booking_id;

    const service =
        booking?.service_name ??
        booking?.service?.name ??
        booking?.service ??
        "Car Wash Service";

    const date =
        booking?.booking_date ??
        booking?.date ??
        "Not specified";

    const time =
        booking?.booking_time ??
        booking?.time ??
        "Not specified";

    const vehicle =
        booking?.vehicle_type ??
        booking?.vehicle ??
        "Not specified";

    const status =
        booking?.status ??
        "Pending";

    return (

        <Card className="border-0 shadow-sm h-100">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-start mb-3">

                    <h5 className="fw-bold mb-0">
                        {service}
                    </h5>

                    <StatusBadge
                        status={status}
                    />

                </div>

                <Row className="g-2">

                    <Col xs={6}>

                        <small className="text-muted d-block">
                            Date
                        </small>

                        <strong>
                            {date}
                        </strong>

                    </Col>

                    <Col xs={6}>

                        <small className="text-muted d-block">
                            Time
                        </small>

                        <strong>
                            {time}
                        </strong>

                    </Col>

                    <Col xs={12}>

                        <small className="text-muted d-block">
                            Vehicle
                        </small>

                        <strong>
                            {vehicle}
                        </strong>

                    </Col>

                </Row>

                <div className="d-flex gap-2 mt-4">

                    {id && (

                        <Button
                            as={Link}
                            to={`/bookings/${id}`}
                            variant="outline-primary"
                            size="sm"
                        >
                            View Details
                        </Button>

                    )}

                    {onCancel &&
                        status.toLowerCase() ===
                        "pending" && (

                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() =>
                                onCancel(id)
                            }
                        >
                            Cancel
                        </Button>

                    )}

                </div>

            </Card.Body>

        </Card>
    );
};

export default BookingCard;
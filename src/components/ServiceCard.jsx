import {
    Card,
    Button,
    Badge
} from "react-bootstrap";

import {
    Link
} from "react-router-dom";

const ServiceCard = ({ service }) => {

    const id =
        service?.id ??
        service?.service_id;

    const name =
        service?.service_name ??
        service?.name ??
        service?.title ??
        "Car Wash Service";

    const description =
        service?.description ??
        "Professional car wash and AutoSpa service.";

    const price = Number(
        service?.service_cost ??
        service?.price ??
        service?.cost ??
        0
    );

    const duration =
        service?.duration ??
        service?.duration_minutes;

    return (
        <Card className="border-0 shadow-sm h-100">

            <Card.Body className="d-flex flex-column">

                <div className="d-flex justify-content-between align-items-start mb-2">

                    <Card.Title className="fw-bold">
                        {name}
                    </Card.Title>

                    <Badge bg="primary">
                        Service
                    </Badge>

                </div>

                <Card.Text className="text-muted">
                    {description}
                </Card.Text>

                {duration && (
                    <small className="text-muted mb-2">
                        Duration: {duration}
                        {typeof duration === "number"
                            ? " minutes"
                            : ""}
                    </small>
                )}

                <div className="mt-auto">

                    <h5 className="fw-bold text-primary mb-3">
                        KES {price.toLocaleString()}
                    </h5>

                    {id ? (
                        <Button
                            as={Link}
                            to={`/book-service?service=${id}`}
                            variant="primary"
                            className="w-100"
                        >
                            Book This Service
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            className="w-100"
                            disabled
                        >
                            Book Service
                        </Button>
                    )}

                </div>

            </Card.Body>

        </Card>
    );
};

export default ServiceCard;
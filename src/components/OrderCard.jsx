import {
    Card,
    Button,
    Row,
    Col
} from "react-bootstrap";

import { Link } from "react-router-dom";

import StatusBadge from "./StatusBadge";

const OrderCard = ({ order }) => {

    const id =
        order?.id ??
        order?.order_id;

    const total = Number(
        order?.total_amount ??
        order?.total ??
        order?.amount ??
        0
    );

    const status =
        order?.status ??
        "Pending";

    const date =
        order?.created_at ??
        order?.order_date ??
        order?.date ??
        "Not specified";

    const items =
        order?.items_count ??
        order?.item_count ??
        order?.items?.length ??
        0;

    return (
        <Card className="border-0 shadow-sm h-100">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-start mb-3">

                    <div>
                        <small className="text-muted">
                            Order
                        </small>

                        <h5 className="fw-bold mb-0">
                            #{id ?? "N/A"}
                        </h5>
                    </div>

                    <StatusBadge status={status} />

                </div>

                <Row className="g-3">

                    <Col xs={6}>
                        <small className="text-muted d-block">
                            Items
                        </small>

                        <strong>
                            {items}
                        </strong>
                    </Col>

                    <Col xs={6}>
                        <small className="text-muted d-block">
                            Total
                        </small>

                        <strong>
                            KES {total.toLocaleString()}
                        </strong>
                    </Col>

                    <Col xs={12}>
                        <small className="text-muted d-block">
                            Date
                        </small>

                        <span>
                            {date}
                        </span>
                    </Col>

                </Row>

                {id && (
                    <Button
                        as={Link}
                        to={`/orders/${id}`}
                        variant="outline-primary"
                        size="sm"
                        className="mt-3"
                    >
                        View Order
                    </Button>
                )}

            </Card.Body>

        </Card>
    );
};

export default OrderCard;
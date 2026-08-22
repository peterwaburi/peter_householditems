import {
    Alert,
    Card
} from "react-bootstrap";

import StatusBadge from "./StatusBadge";

const PaymentStatus = ({
    payment
}) => {

    if (!payment) {

        return (
            <Alert variant="secondary">
                No payment information available.
            </Alert>
        );
    }

    const status =
        payment.status ??
        payment.payment_status ??
        "Pending";

    const transaction =
        payment.transaction_id ??
        payment.mpesa_receipt_number ??
        payment.receipt_number ??
        "Pending";

    const amount = Number(
        payment.amount ??
        payment.total_amount ??
        0
    );

    return (
        <Card className="border-0 shadow-sm">

            <Card.Body>

                <h5 className="fw-bold mb-3">
                    Payment Status
                </h5>

                <div className="mb-2">

                    <span className="text-muted">
                        Status:
                    </span>{" "}

                    <StatusBadge
                        status={status}
                    />

                </div>

                <div className="mb-2">

                    <span className="text-muted">
                        Amount:
                    </span>{" "}

                    <strong>
                        KES {amount.toLocaleString()}
                    </strong>

                </div>

                <div>

                    <span className="text-muted">
                        Transaction:
                    </span>{" "}

                    <strong>
                        {transaction}
                    </strong>

                </div>

            </Card.Body>

        </Card>
    );
};

export default PaymentStatus;
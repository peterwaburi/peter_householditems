import { useState } from "react";
import {
    Form,
    Button,
    Alert,
    Card
} from "react-bootstrap";

import {
    stkPush
} from "../api/payments";

const MpesaPayment = ({
    amount,
    orderId,
    onSuccess
}) => {

    const [phone, setPhone] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        try {

            const response =
                await stkPush({
                    phone,
                    amount,
                    order_id: orderId
                });

            setSuccess(
                response.data?.message ||
                "M-Pesa payment request sent. Check your phone."
            );

            if (onSuccess) {
                onSuccess(response.data);
            }

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to initiate M-Pesa payment."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

                <h5 className="fw-bold mb-3">
                    M-Pesa Payment
                </h5>

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
                            M-Pesa Number
                        </Form.Label>

                        <Form.Control
                            type="tel"
                            value={phone}
                            onChange={(event) =>
                                setPhone(
                                    event.target.value
                                )
                            }
                            placeholder="07XXXXXXXX"
                            required
                        />

                    </Form.Group>

                    <div className="mb-3">

                        <strong>
                            Amount:
                        </strong>{" "}

                        KES{" "}
                        {Number(
                            amount || 0
                        ).toLocaleString()}

                    </div>

                    <Button
                        type="submit"
                        variant="success"
                        className="w-100"
                        disabled={loading}
                    >
                        {loading
                            ? "Sending Request..."
                            : "Pay with M-Pesa"}
                    </Button>

                </Form>

            </Card.Body>

        </Card>
    );
};

export default MpesaPayment;
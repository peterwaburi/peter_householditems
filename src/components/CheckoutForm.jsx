import { useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Row,
    Col
} from "react-bootstrap";

import useCart from "../hooks/useCart";
import {
    createCheckoutOrder,
    initiateCheckoutPayment
} from "../api/checkout";

const CheckoutForm = ({
    onSuccess
}) => {

    const {
        cart,
        total,
        clear
    } = useCart();

    const [phone, setPhone] = useState("");

    const [notes, setNotes] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (cart.length === 0) {

            setError(
                "Your cart is empty."
            );

            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {

            const orderData = {
                items: cart.map((item) => ({
                    product_id:
                        item.id ??
                        item.product_id,

                    quantity:
                        Number(item.quantity) || 1
                })),

                total_amount: total,

                phone,

                notes
            };

            const orderResponse =
                await createCheckoutOrder(
                    orderData
                );

            const order =
                orderResponse.data?.data ??
                orderResponse.data ??
                {};

            await initiateCheckoutPayment({
                phone,
                amount: total,
                order_id:
                    order.id ??
                    order.order_id
            });

            setSuccess(
                "Payment request sent to your phone. Check your M-Pesa prompt."
            );

            clear();

            if (onSuccess) {
                onSuccess(order);
            }

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to complete checkout."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                    Checkout
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

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    M-Pesa Phone Number
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

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Amount
                                </Form.Label>

                                <Form.Control
                                    value={`KES ${total.toLocaleString()}`}
                                    disabled
                                />

                            </Form.Group>

                        </Col>

                        <Col xs={12}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Order Notes
                                </Form.Label>

                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={notes}
                                    onChange={(event) =>
                                        setNotes(
                                            event.target.value
                                        )
                                    }
                                    placeholder="Additional instructions..."
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    <Button
                        type="submit"
                        variant="success"
                        className="w-100"
                        disabled={
                            loading ||
                            cart.length === 0
                        }
                    >
                        {loading
                            ? "Processing..."
                            : `Pay KES ${total.toLocaleString()} with M-Pesa`}
                    </Button>

                </Form>

            </Card.Body>

        </Card>
    );
};

export default CheckoutForm;
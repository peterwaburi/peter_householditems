import { Card, Form } from "react-bootstrap";

function PaymentMethodCard() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Payment Method
                </h4>

                <Form>

                    <Form.Check
                        type="radio"
                        label="M-Pesa"
                        name="payment"
                        defaultChecked
                        className="mb-3"
                    />

                    <Form.Check
                        type="radio"
                        label="Cash"
                        name="payment"
                        className="mb-3"
                    />

                    <Form.Check
                        type="radio"
                        label="Card"
                        name="payment"
                    />

                </Form>

            </Card.Body>

        </Card>

    );

}

export default PaymentMethodCard;
import { Card, Form, Button } from "react-bootstrap";

function CouponCard() {

    return (

        <Card className="shadow-sm border-0 mt-4">

            <Card.Body>

                <h5>Coupon Code</h5>

                <Form className="d-flex mt-3">

                    <Form.Control
                        placeholder="Enter coupon"
                    />

                    <Button className="ms-2">
                        Apply
                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

}

export default CouponCard;
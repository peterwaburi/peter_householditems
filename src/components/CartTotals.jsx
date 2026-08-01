import { Card } from "react-bootstrap";

function CartTotals() {

    const subtotal = 2750;
    const tax = 275;
    const total = subtotal + tax;

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Cart Totals
                </h4>

                <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <strong>KES {subtotal}</strong>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <span>Tax</span>
                    <strong>KES {tax}</strong>
                </div>

                <hr />

                <div className="d-flex justify-content-between">

                    <h5>Total</h5>

                    <h5 className="text-primary">
                        KES {total}
                    </h5>

                </div>

            </Card.Body>

        </Card>

    );

}

export default CartTotals;
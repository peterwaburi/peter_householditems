import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartSummary(){

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4>Cart Summary</h4>

                <hr/>

                <div className="d-flex justify-content-between">

                    <span>Total</span>

                    <strong>KES 2,750</strong>

                </div>

                <Button
                    as={Link}
                    to="/customer/checkout"
                    className="w-100 mt-4"
                >
                    Proceed to Checkout
                </Button>

            </Card.Body>

        </Card>

    );

}

export default CartSummary;
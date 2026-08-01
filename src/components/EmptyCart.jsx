import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmptyCart() {

    return (

        <Card className="shadow-sm border-0 text-center p-5">

            <h2>Your Cart is Empty</h2>

            <p className="text-muted">
                Browse our services and products.
            </p>

            <Button
                as={Link}
                to="/shop"
            >
                Continue Shopping
            </Button>

        </Card>

    );

}

export default EmptyCart;
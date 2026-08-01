import { Card, Button } from "react-bootstrap";

function CartItem({ item }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body className="d-flex justify-content-between align-items-center">

                <div>

                    <h5>{item.name}</h5>

                    <p>KES {item.price}</p>

                </div>

                <Button variant="outline-danger">
                    Remove
                </Button>

            </Card.Body>

        </Card>

    );

}

export default CartItem;
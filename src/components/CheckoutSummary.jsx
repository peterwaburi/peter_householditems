import { Card, ListGroup } from "react-bootstrap";

function CheckoutSummary() {

    const items = [
        { name: "Premium Wash", price: 1500 },
        { name: "Tyre Shine", price: 800 },
        { name: "Air Freshener", price: 450 }
    ];

    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <Card className="shadow-sm border-0">
            <Card.Body>

                <h4 className="mb-4">Order Summary</h4>

                <ListGroup variant="flush">

                    {items.map((item, index) => (

                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between"
                        >
                            <span>{item.name}</span>
                            <strong>KES {item.price}</strong>
                        </ListGroup.Item>

                    ))}

                </ListGroup>

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

export default CheckoutSummary;
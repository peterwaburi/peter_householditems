import { Card, Button } from "react-bootstrap";

function WishlistCard({ item }) {

    return (

        <Card className="shadow-sm border-0 h-100">

            <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "200px", objectFit: "cover" }}
            />

            <Card.Body>

                <h5>{item.name}</h5>

                <p className="text-primary fw-bold">
                    {item.price}
                </p>

                <Button className="w-100">
                    Add To Cart
                </Button>

            </Card.Body>

        </Card>

    );

}

export default WishlistCard;
import { Card, Button, Badge } from "react-bootstrap";

function ProductCard({
    image,
    name,
    price,
    category,
    description
}) {
    return (
        <Card className="product-card shadow-sm border-0 h-100">

            <Card.Img
                variant="top"
                src={image}
                style={{ height: "220px", objectFit: "cover" }}
            />

            <Card.Body>

                <Badge bg="primary" className="mb-3">
                    {category}
                </Badge>

                <Card.Title>{name}</Card.Title>

                <Card.Text>
                    {description}
                </Card.Text>

                <h5 className="text-primary fw-bold mb-3">
                    {price}
                </h5>

                <Button variant="primary">
                    Add to Cart
                </Button>

            </Card.Body>

        </Card>
    );
}

export default ProductCard;
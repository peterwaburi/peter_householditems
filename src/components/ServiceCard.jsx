import { Card, Button, Badge } from "react-bootstrap";

function ServiceCard({
    image,
    title,
    price,
    duration,
    description
}) {
    return (
        <Card className="shadow-sm border-0 h-100 service-card">

            <Card.Img
                variant="top"
                src={image}
                style={{ height: "220px", objectFit: "cover" }}
            />

            <Card.Body>

                <Card.Title>{title}</Card.Title>

                <div className="mb-3">

                    <Badge bg="primary" className="me-2">
                        {price}
                    </Badge>

                    <Badge bg="secondary">
                        {duration}
                    </Badge>

                </div>

                <Card.Text>
                    {description}
                </Card.Text>

                <div className="d-flex gap-2">

                    <Button variant="primary">
                        Book Service
                    </Button>

                    <Button variant="outline-primary">
                        Learn More
                    </Button>

                </div>

            </Card.Body>

        </Card>
    );
}

export default ServiceCard;
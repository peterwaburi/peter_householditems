import { Card, Button, ListGroup, Badge } from "react-bootstrap";

function PackagePricingCard({ pack }) {

    return (

        <Card className="shadow-sm border-0 package-card h-100">

            <Card.Body className="text-center">

                <Badge bg="primary" className="mb-3">
                    {pack.level}
                </Badge>

                <h3>{pack.name}</h3>

                <h2 className="text-primary fw-bold">
                    {pack.price}
                </h2>

                <ListGroup variant="flush" className="my-4">

                    {pack.features.map((feature,index)=>(

                        <ListGroup.Item key={index}>
                            ✓ {feature}
                        </ListGroup.Item>

                    ))}

                </ListGroup>

                <Button className="w-100">
                    Choose Package
                </Button>

            </Card.Body>

        </Card>

    );

}

export default PackagePricingCard;
import { Card, Badge, Button } from "react-bootstrap";

function ServiceProviderCard({ provider }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h5>{provider.name}</h5>

                        <p>{provider.service}</p>

                        <Badge bg="success">
                            {provider.status}
                        </Badge>

                    </div>

                    <Button>
                        Manage
                    </Button>

                </div>

            </Card.Body>

        </Card>

    );

}

export default ServiceProviderCard;
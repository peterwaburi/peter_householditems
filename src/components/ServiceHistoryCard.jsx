import { Card, Badge } from "react-bootstrap";

function ServiceHistoryCard({ service }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between">

                    <div>

                        <h5>{service.name}</h5>

                        <p>{service.date}</p>

                        <small>{service.vehicle}</small>

                    </div>

                    <div className="text-end">

                        <Badge bg="success">
                            {service.status}
                        </Badge>

                        <h5 className="mt-3 text-primary">
                            {service.price}
                        </h5>

                    </div>

                </div>

            </Card.Body>

        </Card>

    );

}

export default ServiceHistoryCard;
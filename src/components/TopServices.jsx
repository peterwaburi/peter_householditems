import { Card, ListGroup, Badge } from "react-bootstrap";

function TopServices() {

    const services = [

        {
            name: "Premium Wash",
            total: 120
        },

        {
            name: "Full Detailing",
            total: 84
        },

        {
            name: "Interior Cleaning",
            total: 73
        },

        {
            name: "Engine Cleaning",
            total: 42
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Top Services
                </h4>

                <ListGroup variant="flush">

                    {services.map((service,index)=>(

                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between"
                        >

                            {service.name}

                            <Badge bg="primary">
                                {service.total}
                            </Badge>

                        </ListGroup.Item>

                    ))}

                </ListGroup>

            </Card.Body>

        </Card>

    );

}

export default TopServices;
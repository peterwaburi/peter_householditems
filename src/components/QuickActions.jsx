import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuickActions() {

    const actions = [

        {
            title: "Bookings",
            link: "/manager/orders"
        },

        {
            title: "Customers",
            link: "/manager/customers"
        },

        {
            title: "Workers",
            link: "/manager/workers"
        },

        {
            title: "Products",
            link: "/manager/products"
        },

        {
            title: "Services",
            link: "/manager/services"
        },

        {
            title: "Reports",
            link: "/manager/reports"
        }

    ];

    return (

        <Row>

            {actions.map((action,index)=>(

                <Col md={4} className="mb-4" key={index}>

                    <Card className="shadow-sm border-0 text-center">

                        <Card.Body>

                            <h5>{action.title}</h5>

                            <Button
                                as={Link}
                                to={action.link}
                                className="mt-3 w-100"
                            >
                                Open
                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>

    );

}

export default QuickActions;
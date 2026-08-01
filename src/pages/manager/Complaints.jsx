import { Container, Card, Badge, Button } from "react-bootstrap";

function Complaints() {

    const complaints = [

        {
            customer: "Peter Waburi",
            issue: "Service delayed by 30 minutes.",
            status: "Open"
        },

        {
            customer: "Jane Wanjiru",
            issue: "Requested refund.",
            status: "Resolved"
        },

        {
            customer: "Brian Otieno",
            issue: "Wrong package charged.",
            status: "Pending"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Customer Complaints
            </h2>

            {complaints.map((item,index)=>(

                <Card className="shadow-sm border-0 mb-3" key={index}>

                    <Card.Body>

                        <div className="d-flex justify-content-between">

                            <div>

                                <h5>{item.customer}</h5>

                                <p>{item.issue}</p>

                            </div>

                            <div>

                                <Badge bg="danger">
                                    {item.status}
                                </Badge>

                                <br/><br/>

                                <Button size="sm">
                                    Resolve
                                </Button>

                            </div>

                        </div>

                    </Card.Body>

                </Card>

            ))}

        </Container>

    );

}

export default Complaints;
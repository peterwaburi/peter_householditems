import { Card, ListGroup, Badge } from "react-bootstrap";

function LiveQueue() {

    const queue = [
        { customer: "Peter Waburi", service: "Premium Wash", status: "Waiting" },
        { customer: "Jane Wanjiru", service: "Interior Cleaning", status: "In Progress" },
        { customer: "Brian Otieno", service: "Full Detailing", status: "Completed" }
    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Live Queue</h4>

                <ListGroup variant="flush">

                    {queue.map((job,index)=>(

                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                        >

                            <div>

                                <strong>{job.customer}</strong>

                                <br/>

                                <small>{job.service}</small>

                            </div>

                            <Badge bg="primary">
                                {job.status}
                            </Badge>

                        </ListGroup.Item>

                    ))}

                </ListGroup>

            </Card.Body>

        </Card>

    );

}

export default LiveQueue;
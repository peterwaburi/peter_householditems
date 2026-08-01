import { Card, ListGroup, Badge } from "react-bootstrap";

function CompletedJobs() {

    const jobs = [

        {
            customer: "Peter Waburi",
            service: "Premium Wash",
            date: "Today"
        },

        {
            customer: "Jane Wanjiru",
            service: "Interior Cleaning",
            date: "Today"
        },

        {
            customer: "Brian Otieno",
            service: "Full Detailing",
            date: "Yesterday"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Completed Jobs
                </h4>

                <ListGroup variant="flush">

                    {jobs.map((job,index)=>(

                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                        >

                            <div>

                                <strong>{job.customer}</strong>

                                <br/>

                                <small>{job.service}</small>

                            </div>

                            <Badge bg="success">
                                {job.date}
                            </Badge>

                        </ListGroup.Item>

                    ))}

                </ListGroup>

            </Card.Body>

        </Card>

    );

}

export default CompletedJobs;
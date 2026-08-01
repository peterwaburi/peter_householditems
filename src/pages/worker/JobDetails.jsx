import { Container, Card, Badge, Button } from "react-bootstrap";

function JobDetails(){

    return(

        <Container className="py-5">

            <Card className="shadow-sm border-0">

                <Card.Body>

                    <h2 className="text-primary">
                        Full Detailing
                    </h2>

                    <Badge bg="warning">
                        In Progress
                    </Badge>

                    <hr/>

                    <p><strong>Customer:</strong> Peter Waburi</p>

                    <p><strong>Vehicle:</strong> Ford Ranger Wildtrak</p>

                    <p><strong>Phone:</strong> 0712345678</p>

                    <p><strong>Location:</strong> BlueWave Car Wash</p>

                    <p><strong>Description:</strong> Complete detailing inside and outside.</p>

                    <Button variant="success">
                        Mark as Completed
                    </Button>

                </Card.Body>

            </Card>

        </Container>

    );

}

export default JobDetails;
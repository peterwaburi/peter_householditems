import { Card, Badge, Button } from "react-bootstrap";

function ManagerWorkerCard({ worker }) {

    return (

        <Card className="shadow-sm border-0 mb-3">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h5>{worker.name}</h5>

                        <p>{worker.position}</p>

                        <Badge bg="success">
                            {worker.jobs} Jobs
                        </Badge>

                    </div>

                    <Button variant="primary">
                        Manage
                    </Button>

                </div>

            </Card.Body>

        </Card>

    );

}

export default ManagerWorkerCard;
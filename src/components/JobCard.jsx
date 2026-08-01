import { Card, Badge, Button } from "react-bootstrap";

function JobCard({ job }) {
    return (
        <Card className="shadow-sm border-0 mb-4">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h5>{job.customer}</h5>

                        <p className="mb-1">
                            <strong>Service:</strong> {job.service}
                        </p>

                        <p className="mb-1">
                            <strong>Vehicle:</strong> {job.vehicle}
                        </p>

                        <p className="mb-0">
                            <strong>Time:</strong> {job.time}
                        </p>

                    </div>

                    <div className="text-end">

                        <Badge bg={job.color}>
                            {job.status}
                        </Badge>

                        <br /><br />

                        <Button variant="primary">
                            View Job
                        </Button>

                    </div>

                </div>

            </Card.Body>

        </Card>
    );
}

export default JobCard;
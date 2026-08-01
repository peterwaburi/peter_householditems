import { Card, Button } from "react-bootstrap";

function WorkerProfileCard({ worker }) {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body className="text-center">

                <img
                    src="https://picsum.photos/150"
                    className="rounded-circle mb-3"
                    width="120"
                    height="120"
                    alt="Worker"
                />

                <h4>{worker.name}</h4>

                <p>{worker.position}</p>

                <hr />

                <p>
                    <strong>Phone:</strong> {worker.phone}
                </p>

                <p>
                    <strong>Email:</strong> {worker.email}
                </p>

                <Button className="w-100">
                    Edit Profile
                </Button>

            </Card.Body>

        </Card>

    );

}

export default WorkerProfileCard;
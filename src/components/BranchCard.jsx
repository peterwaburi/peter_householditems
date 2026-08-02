import { Card, Button, Badge } from "react-bootstrap";

function BranchCard({ branch }) {

    return (

        <Card className="shadow-sm border-0 mb-4">

            <Card.Body>

                <h4>{branch.name}</h4>

                <p>{branch.location}</p>

                <p>Workers: {branch.workers}</p>

                <Badge bg="success">
                    {branch.status}
                </Badge>

                <Button
                    className="w-100 mt-3"
                >
                    Manage Branch
                </Button>

            </Card.Body>

        </Card>

    );

}

export default BranchCard;
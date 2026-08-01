import { Card, Button, ListGroup } from "react-bootstrap";

function ProfileCard({ user }) {
    return (
        <Card className="shadow-sm border-0">

            <Card.Body className="text-center">

                <img
                    src="https://picsum.photos/150"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    width="120"
                    height="120"
                />

                <h4>{user.name}</h4>

                <p className="text-muted">
                    {user.email}
                </p>

            </Card.Body>

            <ListGroup variant="flush">

                <ListGroup.Item>
                    <strong>Phone:</strong> {user.phone}
                </ListGroup.Item>

                <ListGroup.Item>
                    <strong>Vehicles:</strong> {user.vehicles}
                </ListGroup.Item>

                <ListGroup.Item>
                    <strong>Bookings:</strong> {user.bookings}
                </ListGroup.Item>

                <ListGroup.Item>
                    <strong>Loyalty Points:</strong> {user.points}
                </ListGroup.Item>

            </ListGroup>

            <Card.Body>

                <Button
                    variant="primary"
                    className="w-100"
                >
                    Edit Profile
                </Button>

            </Card.Body>

        </Card>
    );
}

export default ProfileCard;
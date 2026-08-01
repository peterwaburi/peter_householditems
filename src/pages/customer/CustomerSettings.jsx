import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProfileCard from "../../components/ProfileCard";

function CustomerSettings() {

    const user = {
        name: "Peter Waburi",
        email: "peter@gmail.com",
        phone: "0712345678",
        vehicles: 2,
        bookings: 12,
        points: 320
    };

    return (

        <Container className="py-5">

            <Row>

                <Col lg={4} className="mb-4">

                    <ProfileCard user={user} />

                </Col>

                <Col lg={8}>

                    <h2 className="text-primary fw-bold mb-4">
                        Account Settings
                    </h2>

                    <Form>

                        <Form.Group className="mb-3">

                            <Form.Label>Full Name</Form.Label>

                            <Form.Control
                                defaultValue={user.name}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                defaultValue={user.email}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>Phone</Form.Label>

                            <Form.Control
                                defaultValue={user.phone}
                            />

                        </Form.Group>

                        <Button variant="primary">
                            Save Changes
                        </Button>

                    </Form>

                </Col>

            </Row>

        </Container>

    );

}

export default CustomerSettings;
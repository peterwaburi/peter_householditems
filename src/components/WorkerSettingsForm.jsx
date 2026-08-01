import { Card, Form, Button } from "react-bootstrap";

function WorkerSettingsForm() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Account Settings
                </h4>

                <Form>

                    <Form.Group className="mb-3">

                        <Form.Label>Full Name</Form.Label>

                        <Form.Control defaultValue="John Kamau"/>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Email</Form.Label>

                        <Form.Control defaultValue="john@bluewave.com"/>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Phone</Form.Label>

                        <Form.Control defaultValue="0712345678"/>

                    </Form.Group>

                    <Button className="w-100">
                        Save Changes
                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

}

export default WorkerSettingsForm;
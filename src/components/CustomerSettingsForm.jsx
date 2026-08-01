import { Card, Form, Button } from "react-bootstrap";

function CustomerSettingsForm() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Account Settings
                </h4>

                <Form>

                    <Form.Group className="mb-3">

                        <Form.Label>Full Name</Form.Label>

                        <Form.Control defaultValue="Peter Waburi"/>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Email</Form.Label>

                        <Form.Control defaultValue="peter@gmail.com"/>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Phone</Form.Label>

                        <Form.Control defaultValue="+254712345678"/>

                    </Form.Group>

                    <Form.Group className="mb-4">

                        <Form.Label>New Password</Form.Label>

                        <Form.Control type="password"/>

                    </Form.Group>

                    <Button className="w-100">
                        Save Changes
                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

}

export default CustomerSettingsForm;
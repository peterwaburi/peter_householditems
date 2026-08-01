import { Card, Form, Button } from "react-bootstrap";

function LeaveRequestForm() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Leave Request
                </h4>

                <Form>

                    <Form.Group className="mb-3">

                        <Form.Label>Leave Type</Form.Label>

                        <Form.Select>

                            <option>Annual Leave</option>
                            <option>Sick Leave</option>
                            <option>Emergency Leave</option>

                        </Form.Select>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Start Date</Form.Label>

                        <Form.Control type="date"/>

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>End Date</Form.Label>

                        <Form.Control type="date"/>

                    </Form.Group>

                    <Form.Group className="mb-4">

                        <Form.Label>Reason</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={4}
                        />

                    </Form.Group>

                    <Button className="w-100">
                        Submit Request
                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

}

export default LeaveRequestForm;
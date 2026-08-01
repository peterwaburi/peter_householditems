import { Card, Form, Button } from "react-bootstrap";

function SupportTicketForm() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Submit a Support Ticket
                </h4>

                <Form>

                    <Form.Group className="mb-3">

                        <Form.Label>Subject</Form.Label>

                        <Form.Control
                            placeholder="Enter subject"
                        />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>Category</Form.Label>

                        <Form.Select>

                            <option>Booking</option>
                            <option>Payment</option>
                            <option>Products</option>
                            <option>Services</option>
                            <option>Account</option>
                            <option>Other</option>

                        </Form.Select>

                    </Form.Group>

                    <Form.Group className="mb-4">

                        <Form.Label>Description</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={5}
                        />

                    </Form.Group>

                    <Button className="w-100">
                        Submit Ticket
                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

}

export default SupportTicketForm;
import { Form } from "react-bootstrap";

function BookingCalendar({ value, onChange }) {

    return (

        <Form.Group className="mb-3">

            <Form.Label>Select Date</Form.Label>

            <Form.Control
                type="date"
                value={value}
                onChange={onChange}
            />

        </Form.Group>

    );

}

export default BookingCalendar;
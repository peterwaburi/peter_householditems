import { Form } from "react-bootstrap";

function TimeSlotPicker({ value, onChange }) {

    return (

        <Form.Group className="mb-3">

            <Form.Label>Select Time</Form.Label>

            <Form.Select
                value={value}
                onChange={onChange}
            >

                <option>08:00 AM</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>

            </Form.Select>

        </Form.Group>

    );

}

export default TimeSlotPicker;
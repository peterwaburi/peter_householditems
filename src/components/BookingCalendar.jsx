import { Form } from "react-bootstrap";

const BookingCalendar = ({
    value,
    onChange
}) => {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];

    return (
        <Form.Group className="mb-3">

            <Form.Label>
                Booking Date
            </Form.Label>

            <Form.Control
                type="date"
                value={value || ""}
                min={today}
                onChange={onChange}
                required
            />

        </Form.Group>
    );
};

export default BookingCalendar;
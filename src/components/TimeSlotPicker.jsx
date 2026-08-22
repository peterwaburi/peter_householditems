import { Form } from "react-bootstrap";

const TimeSlotPicker = ({
    value,
    onChange
}) => {

    const slots = [
        "08:00 AM",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM"
    ];

    return (
        <Form.Group className="mb-3">

            <Form.Label>
                Preferred Time
            </Form.Label>

            <Form.Select
                value={value || ""}
                onChange={onChange}
                required
            >

                {slots.map((slot) => (

                    <option
                        key={slot}
                        value={slot}
                    >
                        {slot}
                    </option>

                ))}

            </Form.Select>

        </Form.Group>
    );
};

export default TimeSlotPicker;
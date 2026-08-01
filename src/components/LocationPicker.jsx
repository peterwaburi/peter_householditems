import { Form } from "react-bootstrap";

function LocationPicker({ value, onChange }) {

    return (

        <Form.Group className="mb-4">

            <Form.Label>Location</Form.Label>

            <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your location..."
                value={value}
                onChange={onChange}
            />

        </Form.Group>

    );

}

export default LocationPicker;
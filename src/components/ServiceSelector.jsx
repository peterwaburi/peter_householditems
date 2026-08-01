import { Form } from "react-bootstrap";

function ServiceSelector({ value, onChange }) {

    return (

        <Form.Group className="mb-3">

            <Form.Label>Service</Form.Label>

            <Form.Select
                value={value}
                onChange={onChange}
            >

                <option>Exterior Wash</option>
                <option>Interior Cleaning</option>
                <option>Premium Wash</option>
                <option>Full Detailing</option>
                <option>Engine Cleaning</option>
                <option>Ceramic Coating</option>
                <option>Carpet Cleaning</option>
                <option>Sofa Cleaning</option>

            </Form.Select>

        </Form.Group>

    );

}

export default ServiceSelector;
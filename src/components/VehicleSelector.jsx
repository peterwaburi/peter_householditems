import { Form } from "react-bootstrap";

function VehicleSelector({ value, onChange }) {

    return (

        <Form.Group className="mb-3">

            <Form.Label>Select Vehicle</Form.Label>

            <Form.Select
                value={value}
                onChange={onChange}
            >

                <option value="">Select Vehicle</option>
                <option value="Toyota Prado">Toyota Prado</option>
                <option value="Ford Ranger">Ford Ranger</option>
                <option value="BMW X5">BMW X5</option>
                <option value="Mercedes Benz">Mercedes Benz</option>
                <option value="Subaru Forester">Subaru Forester</option>
                <option value="Mazda CX-5">Mazda CX-5</option>
                <option value="Nissan X-Trail">Nissan X-Trail</option>

            </Form.Select>

        </Form.Group>

    );

}

export default VehicleSelector;
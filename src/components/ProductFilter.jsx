import { Form } from "react-bootstrap";

function ProductFilter({ category, onChange }) {

    return (

        <Form.Select
            value={category}
            onChange={onChange}
            className="mb-4"
        >

            <option value="All">All Categories</option>
            <option value="Cleaning Chemicals">Cleaning Chemicals</option>
            <option value="Vehicle Care">Vehicle Care</option>
            <option value="Accessories">Accessories</option>
            <option value="Fluids">Fluids</option>
            <option value="Emergency">Emergency</option>
            <option value="Car Care Tools">Car Care Tools</option>
            <option value="Electrical">Electrical</option>
            <option value="Tyre & Wheel">Tyre & Wheel</option>

        </Form.Select>

    );

}

export default ProductFilter;
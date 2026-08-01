import { Form } from "react-bootstrap";

function ProductSearch({ value, onChange }) {
    return (
        <Form.Control
            type="text"
            placeholder="Search products..."
            value={value}
            onChange={onChange}
            className="mb-4"
        />
    );
}

export default ProductSearch;
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function ProductForm({ onSave }) {

    const [product, setProduct] = useState({

        name: "",
        category: "",
        price: "",
        stock: ""

    });

    const handleChange = (e) => {

        setProduct({

            ...product,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(product);

        setProduct({

            name: "",
            category: "",
            price: "",
            stock: ""

        });

    };

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">

                <Form.Label>Product Name</Form.Label>

                <Form.Control
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Category</Form.Label>

                <Form.Control
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Price</Form.Label>

                <Form.Control
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-4">

                <Form.Label>Stock</Form.Label>

                <Form.Control
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                />

            </Form.Group>

            <Button type="submit" className="w-100">

                Save Product

            </Button>

        </Form>

    );

}

export default ProductForm;
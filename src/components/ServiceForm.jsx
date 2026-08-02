import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function ServiceForm({ onSave }) {

    const [service, setService] = useState({

        name: "",
        price: "",
        duration: ""

    });

    const handleChange = (e) => {

        setService({

            ...service,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(service);

    };

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">

                <Form.Label>Service</Form.Label>

                <Form.Control
                    name="name"
                    value={service.name}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Price</Form.Label>

                <Form.Control
                    name="price"
                    value={service.price}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-4">

                <Form.Label>Duration</Form.Label>

                <Form.Control
                    name="duration"
                    value={service.duration}
                    onChange={handleChange}
                />

            </Form.Group>

            <Button type="submit" className="w-100">

                Save Service

            </Button>

        </Form>

    );

}

export default ServiceForm;
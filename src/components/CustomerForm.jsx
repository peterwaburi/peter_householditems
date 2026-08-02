import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function CustomerForm({ onSave }) {

    const [customer, setCustomer] = useState({

        name: "",
        email: "",
        phone: ""

    });

    const handleChange = (e) => {

        setCustomer({

            ...customer,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(customer);

        setCustomer({

            name: "",
            email: "",
            phone: ""

        });

    };

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">

                <Form.Label>Name</Form.Label>

                <Form.Control
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Email</Form.Label>

                <Form.Control
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-4">

                <Form.Label>Phone</Form.Label>

                <Form.Control
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                />

            </Form.Group>

            <Button type="submit" className="w-100">

                Save Customer

            </Button>

        </Form>

    );

}

export default CustomerForm;
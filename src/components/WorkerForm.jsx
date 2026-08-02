import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function WorkerForm({ onSave }) {

    const [worker, setWorker] = useState({

        name: "",
        email: "",
        phone: "",
        role: "",
        salary: ""

    });

    const handleChange = (e) => {

        setWorker({

            ...worker,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(worker);

        setWorker({

            name: "",
            email: "",
            phone: "",
            role: "",
            salary: ""

        });

    };

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">

                <Form.Label>Name</Form.Label>

                <Form.Control
                    name="name"
                    value={worker.name}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Email</Form.Label>

                <Form.Control
                    type="email"
                    name="email"
                    value={worker.email}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Phone</Form.Label>

                <Form.Control
                    name="phone"
                    value={worker.phone}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Role</Form.Label>

                <Form.Control
                    name="role"
                    value={worker.role}
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group className="mb-4">

                <Form.Label>Salary</Form.Label>

                <Form.Control
                    type="number"
                    name="salary"
                    value={worker.salary}
                    onChange={handleChange}
                />

            </Form.Group>

            <Button type="submit" className="w-100">

                Save Worker

            </Button>

        </Form>

    );

}

export default WorkerForm;
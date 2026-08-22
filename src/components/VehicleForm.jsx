import { useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Row,
    Col
} from "react-bootstrap";

import useVehicles from "../hooks/useVehicles";

const VehicleForm = ({
    onSuccess
}) => {

    const {
        addVehicle
    } = useVehicles();

    const [form, setForm] = useState({
        registration_number: "",
        vehicle_type: "",
        make: "",
        model: "",
        color: ""
    });

    const [saving, setSaving] =
        useState(false);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));

        setError("");
        setSuccess("");
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setSaving(true);
        setError("");
        setSuccess("");

        try {

            await addVehicle(form);

            setSuccess(
                "Vehicle added successfully."
            );

            setForm({
                registration_number: "",
                vehicle_type: "",
                make: "",
                model: "",
                color: ""
            });

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to add vehicle."
            );

        } finally {

            setSaving(false);

        }
    };

    return (
        <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                    Add Vehicle
                </h4>

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {success && (
                    <Alert variant="success">
                        {success}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Registration Number
                                </Form.Label>

                                <Form.Control
                                    name="registration_number"
                                    value={
                                        form.registration_number
                                    }
                                    onChange={handleChange}
                                    placeholder="e.g. KDA 123A"
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Vehicle Type
                                </Form.Label>

                                <Form.Select
                                    name="vehicle_type"
                                    value={form.vehicle_type}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select type
                                    </option>

                                    <option value="Saloon">
                                        Saloon
                                    </option>

                                    <option value="SUV">
                                        SUV
                                    </option>

                                    <option value="Pickup">
                                        Pickup
                                    </option>

                                    <option value="Van">
                                        Van
                                    </option>

                                    <option value="Truck">
                                        Truck
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </Form.Select>

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Make
                                </Form.Label>

                                <Form.Control
                                    name="make"
                                    value={form.make}
                                    onChange={handleChange}
                                    placeholder="e.g. Toyota"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Model
                                </Form.Label>

                                <Form.Control
                                    name="model"
                                    value={form.model}
                                    onChange={handleChange}
                                    placeholder="e.g. Premio"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Color
                                </Form.Label>

                                <Form.Control
                                    name="color"
                                    value={form.color}
                                    onChange={handleChange}
                                    placeholder="e.g. Black"
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    <Button
                        type="submit"
                        variant="primary"
                        disabled={saving}
                    >
                        {saving
                            ? "Adding Vehicle..."
                            : "Add Vehicle"}
                    </Button>

                </Form>

            </Card.Body>

        </Card>
    );
};

export default VehicleForm;
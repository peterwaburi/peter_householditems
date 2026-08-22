import { useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Row,
    Col
} from "react-bootstrap";

import useProfile from "../hooks/useProfile";

const ProfileForm = () => {

    const {
        profile,
        loading,
        error,
        saveProfile
    } = useProfile();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: ""
    });

    const [initialized, setInitialized] =
        useState(false);

    const [saving, setSaving] =
        useState(false);

    const [success, setSuccess] =
        useState("");

    if (profile && !initialized) {

        setForm({
            first_name:
                profile.first_name || "",
            last_name:
                profile.last_name || "",
            username:
                profile.username || "",
            email:
                profile.email || "",
            phone:
                profile.phone || ""
        });

        setInitialized(true);
    }

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));

        setSuccess("");
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setSaving(true);
        setSuccess("");

        try {

            await saveProfile(form);

            setSuccess(
                "Profile updated successfully."
            );

        } catch {
            // Error is exposed by useProfile.
        } finally {

            setSaving(false);

        }
    };

    return (
        <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                    My Profile
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
                                    First Name
                                </Form.Label>

                                <Form.Control
                                    name="first_name"
                                    value={form.first_name}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Last Name
                                </Form.Label>

                                <Form.Control
                                    name="last_name"
                                    value={form.last_name}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Username
                                </Form.Label>

                                <Form.Control
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Email
                                </Form.Label>

                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Phone Number
                                </Form.Label>

                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    disabled={loading}
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    <Button
                        type="submit"
                        variant="primary"
                        disabled={loading || saving}
                    >
                        {saving
                            ? "Saving..."
                            : "Save Changes"}
                    </Button>

                </Form>

            </Card.Body>

        </Card>
    );
};

export default ProfileForm;
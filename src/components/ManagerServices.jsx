import { useState } from "react";
import {
    Container,
    Table,
    Button,
    Alert,
    Modal,
    Form
} from "react-bootstrap";

import ManagerNavbar from "./ManagerNavbar";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";
import ConfirmDialog from "./ConfirmDialog";
import SearchBar from "./SearchBar";

import useServices from "../hooks/useServices";

const ManagerServices = () => {

    const {
        services,
        loading,
        error,
        addService,
        removeService
    } = useServices();

    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedService, setSelectedService] =
        useState(null);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        duration: ""
    });

    const filteredServices = services.filter(
        (service) => {

            const text = [
                service.service_name,
                service.name,
                service.description
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return text.includes(
                search.toLowerCase()
            );
        }
    );

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleAdd = async (event) => {

        event.preventDefault();

        setSaving(true);

        try {

            await addService({
                service_name: form.name,
                name: form.name,
                description: form.description,
                price: Number(form.price),
                duration: form.duration
            });

            setForm({
                name: "",
                description: "",
                price: "",
                duration: ""
            });

            setShowForm(false);

        } catch (err) {

            console.error(
                "Unable to add service:",
                err
            );

        } finally {

            setSaving(false);

        }
    };

    const handleDelete = async () => {

        if (!selectedService) {
            return;
        }

        try {

            await removeService(
                selectedService.id ??
                selectedService.service_id
            );

            setSelectedService(null);

        } catch (err) {

            console.error(
                "Unable to delete service:",
                err
            );
        }
    };

    return (
        <>
            <ManagerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Services
                        </h2>

                        <p className="text-muted mb-0">
                            Manage BlueWave car wash and AutoSpa services.
                        </p>

                    </div>

                    <Button
                        variant="primary"
                        onClick={() => setShowForm(true)}
                    >
                        Add Service
                    </Button>

                </div>

                <div className="mb-3">

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Search services..."
                    />

                </div>

                {loading && (
                    <PageLoader
                        message="Loading services..."
                    />
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!loading &&
                    !error &&
                    filteredServices.length === 0 && (

                    <EmptyState
                        title="No services found"
                        message="There are currently no services to display."
                    />

                )}

                {!loading &&
                    !error &&
                    filteredServices.length > 0 && (

                    <div className="table-responsive">

                        <Table
                            hover
                            className="align-middle shadow-sm"
                        >

                            <thead className="table-dark">

                                <tr>

                                    <th>#</th>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Duration</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredServices.map(
                                    (service, index) => {

                                        const id =
                                            service.id ??
                                            service.service_id ??
                                            index;

                                        const name =
                                            service.service_name ??
                                            service.name ??
                                            "Service";

                                        const price =
                                            Number(
                                                service.price ??
                                                service.service_cost ??
                                                0
                                            );

                                        return (

                                            <tr key={id}>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td className="fw-bold">
                                                    {name}
                                                </td>

                                                <td>
                                                    {
                                                        service.description ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    KES{" "}
                                                    {price.toLocaleString()}
                                                </td>

                                                <td>
                                                    {
                                                        service.duration ||
                                                        service.duration_minutes ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>

                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() =>
                                                            setSelectedService(
                                                                service
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>

                                                </td>

                                            </tr>

                                        );
                                    }
                                )}

                            </tbody>

                        </Table>

                    </div>

                )}

            </Container>

            <Modal
                show={showForm}
                onHide={() => setShowForm(false)}
                centered
            >

                <Modal.Header closeButton>

                    <Modal.Title>
                        Add Service
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={handleAdd}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Service Name
                            </Form.Label>

                            <Form.Control
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Description
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Price (KES)
                            </Form.Label>

                            <Form.Control
                                type="number"
                                min="0"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Duration
                            </Form.Label>

                            <Form.Control
                                name="duration"
                                value={form.duration}
                                onChange={handleChange}
                                placeholder="e.g. 60 minutes"
                            />

                        </Form.Group>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-100"
                            disabled={saving}
                        >
                            {saving
                                ? "Adding..."
                                : "Add Service"}
                        </Button>

                    </Form>

                </Modal.Body>

            </Modal>

            <ConfirmDialog
                show={Boolean(selectedService)}
                title="Delete Service"
                message="Are you sure you want to delete this service?"
                confirmText="Delete Service"
                onConfirm={handleDelete}
                onCancel={() =>
                    setSelectedService(null)
                }
            />

        </>
    );
};

export default ManagerServices;
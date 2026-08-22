import {
    useState
} from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Modal
} from "react-bootstrap";

import CustomerNavbar from "./CustomerNavbar";
import VehicleForm from "./VehicleForm";
import useVehicles from "../hooks/useVehicles";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";
import ConfirmDialog from "./ConfirmDialog";

const CustomerVehicles = () => {

    const {
        vehicles,
        loading,
        error,
        removeVehicle
    } = useVehicles();

    const [showForm, setShowForm] =
        useState(false);

    const [selectedVehicle, setSelectedVehicle] =
        useState(null);

    const [deleting, setDeleting] =
        useState(false);

    const handleDelete = async () => {

        if (!selectedVehicle) {
            return;
        }

        setDeleting(true);

        try {

            await removeVehicle(
                selectedVehicle.id ??
                selectedVehicle.vehicle_id
            );

            setSelectedVehicle(null);

        } catch (err) {

            console.error(
                "Unable to delete vehicle:",
                err
            );

        } finally {

            setDeleting(false);

        }
    };

    return (
        <>
            <CustomerNavbar />

            <Container className="py-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                        <h2 className="fw-bold mb-1">
                            My Vehicles
                        </h2>

                        <p className="text-muted mb-0">
                            Manage the vehicles you use for bookings.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        onClick={() =>
                            setShowForm(true)
                        }
                    >
                        Add Vehicle
                    </Button>

                </div>

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                {loading ? (

                    <PageLoader
                        message="Loading vehicles..."
                    />

                ) : vehicles.length === 0 ? (

                    <EmptyState
                        title="No vehicles"
                        message="Add a vehicle to make booking services easier."
                        action={
                            <Button
                                variant="primary"
                                onClick={() =>
                                    setShowForm(true)
                                }
                            >
                                Add Vehicle
                            </Button>
                        }
                    />

                ) : (

                    <Row className="g-4">

                        {vehicles.map(
                            (vehicle, index) => {

                                const id =
                                    vehicle.id ??
                                    vehicle.vehicle_id ??
                                    index;

                                const registration =
                                    vehicle.registration_number ??
                                    vehicle.registration ??
                                    vehicle.plate_number ??
                                    "Not specified";

                                const type =
                                    vehicle.vehicle_type ??
                                    vehicle.type ??
                                    "Not specified";

                                const make =
                                    vehicle.make ??
                                    "";

                                const model =
                                    vehicle.model ??
                                    "";

                                const color =
                                    vehicle.color ??
                                    "Not specified";

                                return (

                                    <Col
                                        md={6}
                                        lg={4}
                                        key={id}
                                    >

                                        <Card className="border-0 shadow-sm h-100">

                                            <Card.Body>

                                                <div className="d-flex justify-content-between">

                                                    <h5 className="fw-bold">
                                                        {registration}
                                                    </h5>

                                                    <span>
                                                        🚗
                                                    </span>

                                                </div>

                                                <p className="mb-1">
                                                    <strong>
                                                        Type:
                                                    </strong>{" "}
                                                    {type}
                                                </p>

                                                <p className="mb-1">
                                                    <strong>
                                                        Vehicle:
                                                    </strong>{" "}
                                                    {make} {model}
                                                </p>

                                                <p className="mb-3">
                                                    <strong>
                                                        Color:
                                                    </strong>{" "}
                                                    {color}
                                                </p>

                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() =>
                                                        setSelectedVehicle(
                                                            vehicle
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </Button>

                                            </Card.Body>

                                        </Card>

                                    </Col>

                                );
                            }
                        )}

                    </Row>

                )}

            </Container>

            <Modal
                show={showForm}
                onHide={() =>
                    setShowForm(false)
                }
                centered
            >

                <Modal.Header closeButton>

                    <Modal.Title>
                        Add Vehicle
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <VehicleForm
                        onSuccess={() =>
                            setShowForm(false)
                        }
                    />

                </Modal.Body>

            </Modal>

            <ConfirmDialog
                show={Boolean(selectedVehicle)}
                title="Remove Vehicle"
                message="Are you sure you want to remove this vehicle?"
                confirmText={
                    deleting
                        ? "Removing..."
                        : "Remove Vehicle"
                }
                onConfirm={handleDelete}
                onCancel={() =>
                    !deleting &&
                    setSelectedVehicle(null)
                }
            />

        </>
    );
};

export default CustomerVehicles;
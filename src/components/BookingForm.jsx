import { useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Row,
    Col
} from "react-bootstrap";

import BookingCalendar from "./BookingCalendar";
import TimeSlotPicker from "./TimeSlotPicker";
import ServiceSelector from "./ServiceSelector";
import LocationPicker from "./LocationPicker";

import useBookings from "../hooks/useBookings";
import useServices from "../hooks/useServices";

const BookingForm = ({
    onSuccess
}) => {

    const {
        addBooking
    } = useBookings();

    const {
        services,
        loading: servicesLoading
    } = useServices();

    const [form, setForm] = useState({
        service_id: "",
        booking_date: "",
        booking_time: "",
        vehicle_type: "",
        vehicle_registration: "",
        location: "",
        notes: ""
    });

    const [loading, setLoading] =
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
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        try {

            await addBooking(form);

            setSuccess(
                "Your booking has been submitted successfully."
            );

            setForm({
                service_id: "",
                booking_date: "",
                booking_time: "",
                vehicle_type: "",
                vehicle_registration: "",
                location: "",
                notes: ""
            });

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to create booking."
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                    Book a Car Wash Service
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

                            <ServiceSelector
                                services={services}
                                value={form.service_id}
                                onChange={(event) =>
                                    setForm(
                                        (previous) => ({
                                            ...previous,
                                            service_id:
                                                event.target.value
                                        })
                                    )
                                }
                            />

                        </Col>

                        <Col md={6}>

                            <BookingCalendar
                                value={form.booking_date}
                                onChange={(event) =>
                                    setForm(
                                        (previous) => ({
                                            ...previous,
                                            booking_date:
                                                event.target.value
                                        })
                                    )
                                }
                            />

                        </Col>

                        <Col md={6}>

                            <TimeSlotPicker
                                value={form.booking_time}
                                onChange={(event) =>
                                    setForm(
                                        (previous) => ({
                                            ...previous,
                                            booking_time:
                                                event.target.value
                                        })
                                    )
                                }
                            />

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
                                        Select vehicle type
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
                                    Vehicle Registration
                                </Form.Label>

                                <Form.Control
                                    name="vehicle_registration"
                                    value={
                                        form.vehicle_registration
                                    }
                                    onChange={handleChange}
                                    placeholder="e.g. KDA 123A"
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <LocationPicker
                                value={form.location}
                                onChange={(event) =>
                                    setForm(
                                        (previous) => ({
                                            ...previous,
                                            location:
                                                event.target.value
                                        })
                                    )
                                }
                            />

                        </Col>

                        <Col xs={12}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Additional Notes
                                </Form.Label>

                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    placeholder="Any special instructions?"
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-100"
                        disabled={
                            loading ||
                            servicesLoading
                        }
                    >

                        {loading
                            ? "Submitting Booking..."
                            : "Confirm Booking"}

                    </Button>

                </Form>

            </Card.Body>

        </Card>
    );
};

export default BookingForm;
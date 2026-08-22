import {
    Container,
    Card,
    Form,
    Button,
    Alert
} from "react-bootstrap";

import { useEffect, useState } from "react";

import BookingCalendar from "../../components/BookingCalendar";
import TimeSlotPicker from "../../components/TimeSlotPicker";
import ServiceSelector from "../../components/ServiceSelector";
import LocationPicker from "../../components/LocationPicker";

import { getServices } from "../../api/services";
import { createBooking } from "../../api/bookings";
import { getUser } from "../../utils/auth";

import "../../styles/booking.css";

function BookService() {

    const [date, setDate] = useState("");

    const [time, setTime] =
        useState("08:00 AM");

    const [service, setService] =
        useState("");

    const [location, setLocation] =
        useState("");

    const [vehicle, setVehicle] =
        useState("");

    const [services, setServices] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [message, setMessage] =
        useState("");

    const [error, setError] =
        useState("");

    useEffect(() => {

        const loadServices = async () => {

            try {

                const response =
                    await getServices();

                const data =
                    response.data?.data ??
                    response.data?.services ??
                    response.data ??
                    [];

                setServices(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    "Unable to load services."
                );

            }

        };

        loadServices();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        setMessage("");

        const user = getUser();

        if (!user?.id) {

            setError(
                "Please sign in before booking."
            );

            return;

        }

        if (!service) {

            setError(
                "Please select a service."
            );

            return;

        }

        if (!date) {

            setError(
                "Please select a booking date."
            );

            return;

        }

        setLoading(true);

        try {

            const booking = {

                customer_id: user.id,

                service_id: service,

                vehicle: vehicle,

                booking_date: date,

                booking_time: time,

                location: location,

                status: "Pending"

            };

            const response =
                await createBooking(
                    booking
                );

            setMessage(
                response.data?.message ||
                "Booking created successfully."
            );

            setVehicle("");

            setLocation("");

        } catch (err) {

            setError(

                err.response?.data?.message ||
                err.message ||
                "Booking failed."

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <Container className="py-5">

            <Card className="booking-card border-0">

                <Card.Body>

                    <h2 className="fw-bold text-primary mb-4">

                        Book a Service

                    </h2>

                    {message && (

                        <Alert variant="success">

                            {message}

                        </Alert>

                    )}

                    {error && (

                        <Alert variant="danger">

                            {error}

                        </Alert>

                    )}

                    <Form
                        onSubmit={handleSubmit}
                    >

                        <Form.Group className="mb-3">

                            <Form.Label>

                                Vehicle

                            </Form.Label>

                            <Form.Control
                                value={vehicle}
                                placeholder="Toyota Prado"
                                onChange={(e) =>
                                    setVehicle(
                                        e.target.value
                                    )
                                }
                                required
                            />

                        </Form.Group>

                        <ServiceSelector
                            value={service}
                            onChange={(e) =>
                                setService(
                                    e.target.value
                                )
                            }
                        />

                        <BookingCalendar
                            value={date}
                            onChange={(e) =>
                                setDate(
                                    e.target.value
                                )
                            }
                        />

                        <TimeSlotPicker
                            value={time}
                            onChange={(e) =>
                                setTime(
                                    e.target.value
                                )
                            }
                        />

                        <LocationPicker
                            value={location}
                            onChange={(e) =>
                                setLocation(
                                    e.target.value
                                )
                            }
                        />

                        <Button
                            type="submit"
                            className="w-100"
                            size="lg"
                            disabled={loading}
                        >

                            {loading
                                ? "Booking..."
                                : "Book Now"}

                        </Button>

                    </Form>

                </Card.Body>

            </Card>

        </Container>

    );

}

export default BookService;
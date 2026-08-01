import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

import BookingCalendar from "../../components/BookingCalendar";
import TimeSlotPicker from "../../components/TimeSlotPicker";
import ServiceSelector from "../../components/ServiceSelector";
import LocationPicker from "../../components/LocationPicker";

import "../../styles/booking.css";

function BookService() {

    const [date,setDate]=useState("");
    const [time,setTime]=useState("08:00 AM");
    const [service,setService]=useState("Exterior Wash");
    const [location,setLocation]=useState("");

    return(

        <Container className="py-5">

            <Card className="booking-card border-0">

                <Card.Body>

                    <h2 className="fw-bold text-primary mb-4">
                        Book a Service
                    </h2>

                    <Form>

                        <Form.Group className="mb-3">

                            <Form.Label>Vehicle</Form.Label>

                            <Form.Control
                                placeholder="Toyota Prado"
                            />

                        </Form.Group>

                        <ServiceSelector
                            value={service}
                            onChange={(e)=>setService(e.target.value)}
                        />

                        <BookingCalendar
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                        />

                        <TimeSlotPicker
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                        />

                        <LocationPicker
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                        />

                        <Button
                            className="w-100"
                            size="lg"
                        >
                            Book Now
                        </Button>

                    </Form>

                </Card.Body>

            </Card>

        </Container>

    );

}

export default BookService;
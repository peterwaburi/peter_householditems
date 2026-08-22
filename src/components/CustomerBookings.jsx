import {
    Container,
    Button
} from "react-bootstrap";

import {
    Link
} from "react-router-dom";

import CustomerNavbar from "./CustomerNavbar";
import BookingList from "./BookingList";

const CustomerBookings = () => {

    return (
        <>
            <CustomerNavbar />

            <Container className="py-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                        <h2 className="fw-bold mb-1">
                            My Bookings
                        </h2>

                        <p className="text-muted mb-0">
                            View and manage your car wash bookings.
                        </p>
                    </div>

                    <Button
                        as={Link}
                        to="/book-service"
                        variant="primary"
                    >
                        New Booking
                    </Button>

                </div>

                <BookingList />

            </Container>
        </>
    );
};

export default CustomerBookings;
import {
    Container,
    Row,
    Col,
    Alert
} from "react-bootstrap";

import ManagerNavbar from "./ManagerNavbar";
import BookingCard from "./BookingCard";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";

import useBookings from "../hooks/useBookings";

const ManagerBookings = () => {

    const {
        bookings,
        loading,
        error
    } = useBookings();

    return (
        <>
            <ManagerNavbar />

            <Container fluid className="py-4 px-4">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Bookings
                    </h2>

                    <p className="text-muted">
                        Monitor customer bookings and service schedules.
                    </p>

                </div>

                {loading && (
                    <PageLoader
                        message="Loading bookings..."
                    />
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!loading &&
                    !error &&
                    bookings.length === 0 && (

                    <EmptyState
                        title="No bookings"
                        message="There are currently no customer bookings."
                    />

                )}

                {!loading &&
                    !error &&
                    bookings.length > 0 && (

                    <Row className="g-4">

                        {bookings.map(
                            (booking, index) => (

                                <Col
                                    key={
                                        booking.id ??
                                        booking.booking_id ??
                                        index
                                    }
                                    md={6}
                                    lg={4}
                                    xl={3}
                                >

                                    <BookingCard
                                        booking={booking}
                                    />

                                </Col>

                            )
                        )}

                    </Row>

                )}

            </Container>
        </>
    );
};

export default ManagerBookings;
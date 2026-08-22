import {
    Row,
    Col,
    Alert
} from "react-bootstrap";

import useBookings from "../hooks/useBookings";

import BookingCard from "./BookingCard";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";

const BookingList = () => {

    const {
        bookings,
        loading,
        error,
        removeBooking
    } = useBookings();

    const handleCancel = async (id) => {

        const confirmed =
            window.confirm(
                "Are you sure you want to cancel this booking?"
            );

        if (!confirmed) {
            return;
        }

        try {

            await removeBooking(id);

        } catch (err) {

            console.error(
                "Unable to cancel booking:",
                err
            );

        }
    };

    if (loading) {

        return (
            <PageLoader
                message="Loading bookings..."
            />
        );

    }

    if (error) {

        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );

    }

    if (bookings.length === 0) {

        return (
            <EmptyState
                title="No bookings"
                message="You have not made any bookings yet."
            />
        );

    }

    return (

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
                    >

                        <BookingCard
                            booking={booking}
                            onCancel={handleCancel}
                        />

                    </Col>

                )
            )}

        </Row>
    );
};

export default BookingList;
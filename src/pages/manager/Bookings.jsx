import { Container } from "react-bootstrap";
import BookingsTable from "../../components/BookingsTable";

function Bookings() {

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Booking Management
            </h2>

            <BookingsTable />

        </Container>

    );

}

export default Bookings;
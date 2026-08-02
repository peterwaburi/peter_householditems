import { Container } from "react-bootstrap";
import BookingCalendarTable from "../../components/BookingCalendarTable";

function BookingsCalendar(){

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Booking Calendar
            </h2>

            <BookingCalendarTable/>

        </Container>

    );

}

export default BookingsCalendar;
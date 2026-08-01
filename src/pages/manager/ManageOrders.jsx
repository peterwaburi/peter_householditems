import { Container } from "react-bootstrap";
import ManagerBookingCard from "../../components/ManagerBookingCard";

function ManageOrders() {

    const bookings = [

        {
            customer: "Peter Waburi",
            service: "Full Detailing",
            status: "Pending",
            color: "warning"
        },

        {
            customer: "Jane Wanjiru",
            service: "Interior Cleaning",
            status: "Completed",
            color: "success"
        },

        {
            customer: "Brian Otieno",
            service: "Exterior Wash",
            status: "Scheduled",
            color: "primary"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Manage Orders
            </h2>

            {bookings.map((booking,index)=>(

                <ManagerBookingCard
                    key={index}
                    booking={booking}
                />

            ))}

        </Container>

    );

}

export default ManageOrders;
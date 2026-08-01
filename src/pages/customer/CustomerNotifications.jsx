import { Container } from "react-bootstrap";
import NotificationItem from "../../components/NotificationItem";

function CustomerNotifications() {

    const notifications = [

        {
            title:"Booking Confirmed",
            message:"Your booking has been confirmed.",
            status:"New",
            color:"success"
        },

        {
            title:"Payment Received",
            message:"Mpesa payment successful.",
            status:"Paid",
            color:"primary"
        },

        {
            title:"Vehicle Ready",
            message:"Your vehicle is ready for collection.",
            status:"Ready",
            color:"warning"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Notifications
            </h2>

            {notifications.map((item,index)=>(

                <NotificationItem
                    key={index}
                    notification={item}
                />

            ))}

        </Container>

    );

}

export default CustomerNotifications;
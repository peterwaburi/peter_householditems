import { Container } from "react-bootstrap";
import AdminNotificationCard from "../../components/AdminNotificationCard";

function Notifications(){

    const notifications=[

        {
            title:"New Booking",
            message:"Peter booked Premium Wash.",
            time:"5 mins"
        },

        {
            title:"Low Stock",
            message:"Tyre Shine stock is low.",
            time:"15 mins"
        },

        {
            title:"New Review",
            message:"Customer rated 5 stars.",
            time:"1 hour"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Notifications
            </h2>

            {notifications.map((notification,index)=>(

                <AdminNotificationCard
                    key={index}
                    notification={notification}
                />

            ))}

        </Container>

    );

}

export default Notifications;
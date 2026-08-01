import { Container } from "react-bootstrap";
import NotificationCard from "../../components/NotificationCard";

function Notifications() {

    const notifications = [

        {
            title:"New Job",
            message:"You have been assigned a new booking.",
            status:"New",
            color:"primary",
            time:"5 mins ago"
        },

        {
            title:"Job Completed",
            message:"Manager approved completed job.",
            status:"Done",
            color:"success",
            time:"1 hour ago"
        },

        {
            title:"Schedule Changed",
            message:"Customer changed booking time.",
            status:"Update",
            color:"warning",
            time:"Today"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Notifications
            </h2>

            {notifications.map((item,index)=>(

                <NotificationCard
                    key={index}
                    notification={item}
                />

            ))}

        </Container>

    );

}

export default Notifications;
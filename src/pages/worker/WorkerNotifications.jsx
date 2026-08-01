import { Container } from "react-bootstrap";
import NotificationItem from "../../components/NotificationItem";

function WorkerNotifications() {

    const notifications = [

        {
            title:"New Job Assigned",
            message:"You have been assigned a Full Detailing job.",
            status:"New",
            color:"primary"
        },

        {
            title:"Schedule Updated",
            message:"Today's booking has changed.",
            status:"Update",
            color:"warning"
        },

        {
            title:"Job Completed",
            message:"Manager confirmed completion.",
            status:"Done",
            color:"success"
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

export default WorkerNotifications;
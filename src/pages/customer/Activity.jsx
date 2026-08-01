import { Container } from "react-bootstrap";
import ActivityCard from "../../components/ActivityCard";

function Activity() {

    const activities = [

        {
            title: "Premium Wash",
            description: "Booking completed successfully.",
            date: "Today",
            status: "Completed",
            color: "success"
        },

        {
            title: "Tyre Shine",
            description: "Product purchased.",
            date: "Yesterday",
            status: "Paid",
            color: "primary"
        },

        {
            title: "Interior Cleaning",
            description: "Booking awaiting confirmation.",
            date: "2 Days Ago",
            status: "Pending",
            color: "warning"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Activity
            </h2>

            {activities.map((activity,index)=>(

                <ActivityCard
                    key={index}
                    activity={activity}
                />

            ))}

        </Container>

    );

}

export default Activity;
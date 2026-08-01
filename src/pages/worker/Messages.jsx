import { Container } from "react-bootstrap";
import WorkerMessageCard from "../../components/WorkerMessageCard";

function Messages() {

    const messages = [

        {
            sender: "Manager",
            subject: "Report at 8:00 AM tomorrow",
            time: "10 mins ago"
        },

        {
            sender: "Customer Care",
            subject: "Customer changed booking time",
            time: "1 hour ago"
        },

        {
            sender: "Manager",
            subject: "Excellent performance this week",
            time: "Yesterday"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Messages
            </h2>

            {messages.map((message,index)=>(

                <WorkerMessageCard
                    key={index}
                    message={message}
                />

            ))}

        </Container>

    );

}

export default Messages;
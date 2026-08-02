import { Container } from "react-bootstrap";
import AnnouncementCard from "../../components/AnnouncementCard";
import "../../styles/operations.css";

function Announcements() {

    const announcements = [

        {
            title:"Weekend Promotion",
            message:"20% discount on Premium Wash this weekend.",
            date:"Today"
        },

        {
            title:"Staff Meeting",
            message:"Meeting on Monday at 8:00 AM.",
            date:"Tomorrow"
        },

        {
            title:"New Product",
            message:"Ceramic coating package now available.",
            date:"This Week"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Announcements
            </h2>

            {announcements.map((announcement,index)=>(

                <AnnouncementCard
                    key={index}
                    announcement={announcement}
                />

            ))}

        </Container>

    );

}

export default Announcements;
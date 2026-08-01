import { Container } from "react-bootstrap";
import JobCard from "../../components/JobCard";

function WorkerHistory() {

    const jobs=[

        {
            customer:"Peter",
            service:"Exterior Wash",
            vehicle:"Ford Ranger",
            time:"9:00 AM",
            status:"Completed",
            color:"success"
        },

        {
            customer:"Jane",
            service:"Interior Cleaning",
            vehicle:"Toyota Prado",
            time:"11:00 AM",
            status:"Completed",
            color:"success"
        },

        {
            customer:"Brian",
            service:"Full Detailing",
            vehicle:"BMW X5",
            time:"2:00 PM",
            status:"Completed",
            color:"success"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Job History
            </h2>

            {jobs.map((job,index)=>(

                <JobCard
                    key={index}
                    job={job}
                />

            ))}

        </Container>

    );

}

export default WorkerHistory;
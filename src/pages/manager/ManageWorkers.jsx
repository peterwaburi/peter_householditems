import { Container } from "react-bootstrap";
import ManagerWorkerCard from "../../components/ManagerWorkerCard";

function ManageWorkers() {

    const workers=[

        {
            name:"John Kamau",
            position:"Senior Detailer",
            jobs:26
        },

        {
            name:"Kevin Maina",
            position:"Cleaner",
            jobs:18
        },

        {
            name:"Mercy Wanjiku",
            position:"Supervisor",
            jobs:31
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Workers
            </h2>

            {workers.map((worker,index)=>(

                <ManagerWorkerCard
                    key={index}
                    worker={worker}
                />

            ))}

        </Container>

    );

}

export default ManageWorkers;
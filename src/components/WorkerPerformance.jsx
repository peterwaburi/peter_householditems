import { Card, Table } from "react-bootstrap";

function WorkerPerformance() {

    const workers = [

        {
            name:"John Kamau",
            jobs:28,
            rating:"4.9"
        },

        {
            name:"Mercy Wanjiku",
            jobs:31,
            rating:"4.8"
        },

        {
            name:"Kevin Maina",
            jobs:21,
            rating:"4.7"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Worker Performance
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Jobs</th>
                            <th>Rating</th>

                        </tr>

                    </thead>

                    <tbody>

                        {workers.map((worker,index)=>(

                            <tr key={index}>

                                <td>{worker.name}</td>

                                <td>{worker.jobs}</td>

                                <td>{worker.rating}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default WorkerPerformance;
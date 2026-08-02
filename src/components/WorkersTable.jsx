import { Card, Table, Badge } from "react-bootstrap";

function WorkersTable(){

    const workers=[

        {
            name:"John",
            jobs:25,
            status:"Available"
        },

        {
            name:"Mercy",
            jobs:30,
            status:"Busy"
        },

        {
            name:"Kevin",
            jobs:18,
            status:"Available"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Jobs</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {workers.map((worker,index)=>(

                            <tr key={index}>

                                <td>{worker.name}</td>

                                <td>{worker.jobs}</td>

                                <td>

                                    <Badge bg="success">
                                        {worker.status}
                                    </Badge>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default WorkersTable;
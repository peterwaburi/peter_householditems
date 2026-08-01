import { Card, Table, Badge } from "react-bootstrap";

function TodaysSchedule() {

    const jobs = [

        {
            time: "08:00 AM",
            customer: "Peter Waburi",
            vehicle: "Ford Ranger",
            service: "Premium Wash",
            status: "Pending"
        },

        {
            time: "10:30 AM",
            customer: "Jane Wanjiru",
            vehicle: "Toyota Prado",
            service: "Interior Cleaning",
            status: "In Progress"
        },

        {
            time: "02:00 PM",
            customer: "Brian Otieno",
            vehicle: "BMW X5",
            service: "Full Detailing",
            status: "Completed"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Today's Schedule
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Time</th>
                            <th>Customer</th>
                            <th>Vehicle</th>
                            <th>Service</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {jobs.map((job,index)=>(

                            <tr key={index}>

                                <td>{job.time}</td>
                                <td>{job.customer}</td>
                                <td>{job.vehicle}</td>
                                <td>{job.service}</td>

                                <td>

                                    <Badge bg="primary">
                                        {job.status}
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

export default TodaysSchedule;
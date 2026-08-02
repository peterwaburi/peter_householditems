import { Card, Table, Badge, Button } from "react-bootstrap";

function BookingsTable() {

    const bookings = [

        {
            id:"BK001",
            customer:"Peter",
            service:"Premium Wash",
            worker:"John",
            status:"Pending"
        },

        {
            id:"BK002",
            customer:"Jane",
            service:"Interior Cleaning",
            worker:"Kevin",
            status:"Completed"
        },

        {
            id:"BK003",
            customer:"Brian",
            service:"Detailing",
            worker:"Mercy",
            status:"In Progress"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Worker</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookings.map((booking,index)=>(

                            <tr key={index}>

                                <td>{booking.id}</td>

                                <td>{booking.customer}</td>

                                <td>{booking.service}</td>

                                <td>{booking.worker}</td>

                                <td>

                                    <Badge bg="primary">
                                        {booking.status}
                                    </Badge>

                                </td>

                                <td>

                                    <Button size="sm">
                                        View
                                    </Button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default BookingsTable;
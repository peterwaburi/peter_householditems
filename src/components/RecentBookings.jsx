import { Card, Table } from "react-bootstrap";

function RecentBookings() {

    const bookings = [

        {
            customer:"Peter",
            service:"Premium Wash",
            amount:"KES 1,500"
        },

        {
            customer:"Jane",
            service:"Exterior Wash",
            amount:"KES 500"
        },

        {
            customer:"Brian",
            service:"Full Detailing",
            amount:"KES 3,500"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Recent Bookings
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Customer</th>
                            <th>Service</th>
                            <th>Amount</th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookings.map((booking,index)=>(

                            <tr key={index}>

                                <td>{booking.customer}</td>

                                <td>{booking.service}</td>

                                <td>{booking.amount}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default RecentBookings;
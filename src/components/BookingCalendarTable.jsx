import { Card, Table } from "react-bootstrap";

function BookingCalendarTable(){

    const bookings=[

        {
            date:"02 Aug",
            customer:"Peter",
            service:"Premium Wash",
            time:"09:00 AM"
        },

        {
            date:"02 Aug",
            customer:"Jane",
            service:"Interior Cleaning",
            time:"11:00 AM"
        },

        {
            date:"02 Aug",
            customer:"Brian",
            service:"Detailing",
            time:"02:00 PM"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Bookings Calendar</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Date</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookings.map((booking,index)=>(

                            <tr key={index}>

                                <td>{booking.date}</td>

                                <td>{booking.customer}</td>

                                <td>{booking.service}</td>

                                <td>{booking.time}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default BookingCalendarTable;
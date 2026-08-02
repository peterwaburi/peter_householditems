import { Card, Table, Button } from "react-bootstrap";

function CustomersTable(){

    const customers=[

        {
            name:"Peter Waburi",
            phone:"0712345678",
            bookings:18
        },

        {
            name:"Jane Wanjiru",
            phone:"0723456789",
            bookings:11
        },

        {
            name:"Brian Otieno",
            phone:"0734567890",
            bookings:7
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Phone</th>
                            <th>Bookings</th>
                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {customers.map((customer,index)=>(

                            <tr key={index}>

                                <td>{customer.name}</td>

                                <td>{customer.phone}</td>

                                <td>{customer.bookings}</td>

                                <td>

                                    <Button size="sm">
                                        Manage
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

export default CustomersTable;
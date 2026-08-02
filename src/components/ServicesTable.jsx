import { Card, Table, Button } from "react-bootstrap";

function ServicesTable() {

    const services = [

        {
            name:"Exterior Wash",
            price:"KES 500",
            duration:"30 mins"
        },

        {
            name:"Premium Wash",
            price:"KES 1,500",
            duration:"1 Hour"
        },

        {
            name:"Full Detailing",
            price:"KES 5,000",
            duration:"4 Hours"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Service</th>
                            <th>Price</th>
                            <th>Duration</th>
                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {services.map((service,index)=>(

                            <tr key={index}>

                                <td>{service.name}</td>

                                <td>{service.price}</td>

                                <td>{service.duration}</td>

                                <td>

                                    <Button size="sm">
                                        Edit
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

export default ServicesTable;
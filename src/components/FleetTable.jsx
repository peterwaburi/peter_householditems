import { Card, Table, Badge } from "react-bootstrap";

function FleetTable() {

    const fleet = [

        {
            vehicle:"Toyota Hilux",
            plate:"KDA 123A",
            driver:"John",
            status:"Available"
        },

        {
            vehicle:"Ford Ranger",
            plate:"KCY 222B",
            driver:"Kevin",
            status:"On Duty"
        },

        {
            vehicle:"Isuzu D-Max",
            plate:"KDL 890C",
            driver:"Mercy",
            status:"Maintenance"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Fleet
                </h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Vehicle</th>
                            <th>Plate</th>
                            <th>Driver</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {fleet.map((vehicle,index)=>(

                            <tr key={index}>

                                <td>{vehicle.vehicle}</td>

                                <td>{vehicle.plate}</td>

                                <td>{vehicle.driver}</td>

                                <td>

                                    <Badge
                                        bg={
                                            vehicle.status==="Available"
                                            ? "success"
                                            : vehicle.status==="On Duty"
                                            ? "primary"
                                            : "warning"
                                        }
                                    >
                                        {vehicle.status}
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

export default FleetTable;
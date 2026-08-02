import { Card, Table } from "react-bootstrap";

function VehicleTable(){

    const vehicles=[

        {
            owner:"Peter",
            vehicle:"Ford Ranger",
            plate:"KDA 456A"
        },

        {
            owner:"Jane",
            vehicle:"Toyota Prado",
            plate:"KDL 112B"
        },

        {
            owner:"Brian",
            vehicle:"BMW X5",
            plate:"KCY 875L"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">Registered Vehicles</h4>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Owner</th>
                            <th>Vehicle</th>
                            <th>Plate</th>

                        </tr>

                    </thead>

                    <tbody>

                        {vehicles.map((vehicle,index)=>(

                            <tr key={index}>

                                <td>{vehicle.owner}</td>

                                <td>{vehicle.vehicle}</td>

                                <td>{vehicle.plate}</td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default VehicleTable;
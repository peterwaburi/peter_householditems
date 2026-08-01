import { Container, Row, Col } from "react-bootstrap";
import VehicleCard from "../../components/VehicleCard";

function CustomerVehicles() {

    const vehicles=[

        {
            name:"Ford Ranger",
            model:"2021 Wildtrak",
            plate:"KDA 123A"
        },

        {
            name:"Toyota Prado",
            model:"TX",
            plate:"KDG 567B"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                My Vehicles
            </h2>

            <Row>

                {vehicles.map((vehicle,index)=>(

                    <Col md={6} lg={4} key={index} className="mb-4">

                        <VehicleCard
                            vehicle={vehicle}
                        />

                    </Col>

                ))}

            </Row>

        </Container>

    );

}

export default CustomerVehicles;
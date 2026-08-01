import { Card, Button } from "react-bootstrap";

function VehicleCard({ vehicle }) {

    return (

        <Card className="shadow-sm border-0 h-100">

            <Card.Body>

                <h5>{vehicle.name}</h5>

                <p>{vehicle.model}</p>

                <p className="text-muted">
                    Plate: {vehicle.plate}
                </p>

                <Button variant="primary">
                    Book Service
                </Button>

            </Card.Body>

        </Card>

    );

}

export default VehicleCard;
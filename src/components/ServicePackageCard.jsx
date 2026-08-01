import { Card, Button } from "react-bootstrap";

function ServicePackageCard({ pack }) {

    return (

        <Card className="shadow-sm border-0 h-100">

            <Card.Body>

                <h4>{pack.name}</h4>

                <h2 className="text-primary">
                    {pack.price}
                </h2>

                <p>{pack.description}</p>

                <Button className="w-100">
                    Select Package
                </Button>

            </Card.Body>

        </Card>

    );

}

export default ServicePackageCard;
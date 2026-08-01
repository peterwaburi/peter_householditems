import { Card, Button, Image } from "react-bootstrap";

function CustomerProfileCard() {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body className="text-center">

                <Image
                    src="https://picsum.photos/200"
                    roundedCircle
                    width={120}
                    height={120}
                    className="mb-3"
                />

                <h4>Peter Waburi</h4>

                <p className="text-muted">
                    peter@gmail.com
                </p>

                <p>
                    +254 712 345 678
                </p>

                <Button className="w-100">
                    Change Photo
                </Button>

            </Card.Body>

        </Card>

    );

}

export default CustomerProfileCard;
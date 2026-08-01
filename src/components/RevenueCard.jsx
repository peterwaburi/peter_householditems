import { Card } from "react-bootstrap";

function RevenueCard({ title, amount }) {

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h6 className="text-muted">
                    {title}
                </h6>

                <h2 className="text-success fw-bold">
                    {amount}
                </h2>

            </Card.Body>

        </Card>

    );

}

export default RevenueCard;
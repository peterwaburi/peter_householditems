import { Card, ProgressBar, Button } from "react-bootstrap";

function LoyaltyCard() {

    const points = 320;
    const nextReward = 500;

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4>Loyalty Points</h4>

                <h2 className="text-primary fw-bold">
                    {points}
                </h2>

                <ProgressBar
                    now={(points/nextReward)*100}
                    className="mb-3"
                />

                <p>
                    {nextReward-points} points to next reward.
                </p>

                <Button className="w-100">
                    Redeem Points
                </Button>

            </Card.Body>

        </Card>

    );

}

export default LoyaltyCard;
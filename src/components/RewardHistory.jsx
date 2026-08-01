import { Card, ListGroup, Badge } from "react-bootstrap";

function RewardHistory() {

    const rewards = [

        {
            title:"Booking Reward",
            points:"+50"
        },

        {
            title:"Product Purchase",
            points:"+20"
        },

        {
            title:"Referral Bonus",
            points:"+100"
        }

    ];

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Reward History
                </h4>

                <ListGroup variant="flush">

                    {rewards.map((reward,index)=>(

                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between"
                        >

                            {reward.title}

                            <Badge bg="success">
                                {reward.points}
                            </Badge>

                        </ListGroup.Item>

                    ))}

                </ListGroup>

            </Card.Body>

        </Card>

    );

}

export default RewardHistory;
import { Card, ListGroup, Badge } from "react-bootstrap";

function RecentActivity() {

    const activities = [

        {
            title:"Booked Premium Wash",
            time:"10 mins ago",
            status:"Completed"
        },

        {
            title:"Purchased Tyre Shine",
            time:"1 hour ago",
            status:"Paid"
        },

        {
            title:"Review Submitted",
            time:"Yesterday",
            status:"Done"
        }

    ];

    return(

        <Card className="shadow-sm border-0">

            <Card.Body>

                <h4 className="mb-4">
                    Recent Activity
                </h4>

                <ListGroup variant="flush">

                    {activities.map((activity,index)=>(

                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between"
                        >

                            <div>

                                <strong>{activity.title}</strong>

                                <br/>

                                <small>{activity.time}</small>

                            </div>

                            <Badge bg="primary">
                                {activity.status}
                            </Badge>

                        </ListGroup.Item>

                    ))}

                </ListGroup>

            </Card.Body>

        </Card>

    );

}

export default RecentActivity;
import { Row, Col, Card } from "react-bootstrap";

function WorkerStats() {

    const stats = [

        {
            title: "Today's Jobs",
            value: 8,
            color: "primary"
        },

        {
            title: "Completed",
            value: 5,
            color: "success"
        },

        {
            title: "Pending",
            value: 3,
            color: "warning"
        },

        {
            title: "Rating",
            value: "4.9",
            color: "info"
        }

    ];

    return (

        <Row className="mb-4">

            {stats.map((item,index)=>(

                <Col md={3} key={index}>

                    <Card className="shadow-sm border-0 text-center mb-3">

                        <Card.Body>

                            <h2 className={`text-${item.color}`}>
                                {item.value}
                            </h2>

                            <p className="mb-0">
                                {item.title}
                            </p>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>

    );

}

export default WorkerStats;
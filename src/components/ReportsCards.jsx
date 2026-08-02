import { Row, Col, Card } from "react-bootstrap";

function ReportsCards() {

    const cards = [

        {title:"Revenue",value:"KES 975K"},
        {title:"Bookings",value:"1,240"},
        {title:"Customers",value:"326"},
        {title:"Workers",value:"18"}

    ];

    return (

        <Row>

            {cards.map((card,index)=>(

                <Col md={3} key={index}>

                    <Card className="shadow-sm border-0 text-center mb-4">

                        <Card.Body>

                            <h2 className="text-primary">
                                {card.value}
                            </h2>

                            <p>{card.title}</p>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>

    );

}

export default ReportsCards;
import { Container, Card, Button } from "react-bootstrap";

function Messages(){

    const messages=[

        {
            sender:"Customer Support",
            subject:"New Booking Request"
        },

        {
            sender:"Worker",
            subject:"Request for Leave"
        },

        {
            sender:"Customer",
            subject:"Need Home Cleaning"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Messages
            </h2>

            {messages.map((message,index)=>(

                <Card className="shadow-sm border-0 mb-3" key={index}>

                    <Card.Body className="d-flex justify-content-between">

                        <div>

                            <h5>{message.sender}</h5>

                            <p>{message.subject}</p>

                        </div>

                        <Button>
                            Open
                        </Button>

                    </Card.Body>

                </Card>

            ))}

        </Container>

    );

}

export default Messages;
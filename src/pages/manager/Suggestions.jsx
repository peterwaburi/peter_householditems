import { Container, Card } from "react-bootstrap";

function Suggestions() {

    const suggestions = [

        {
            customer:"Peter",
            message:"Add online card payments."
        },

        {
            customer:"Mercy",
            message:"Increase weekend workers."
        },

        {
            customer:"Brian",
            message:"Offer monthly memberships."
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Suggestions
            </h2>

            {suggestions.map((item,index)=>(

                <Card className="shadow-sm border-0 mb-3" key={index}>

                    <Card.Body>

                        <h5>{item.customer}</h5>

                        <p>{item.message}</p>

                    </Card.Body>

                </Card>

            ))}

        </Container>

    );

}

export default Suggestions;
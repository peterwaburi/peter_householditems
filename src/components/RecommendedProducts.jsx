import { Card, Row, Col, Button } from "react-bootstrap";

function RecommendedProducts() {

    const products = [

        {
            name:"Tyre Shine",
            price:"KES 800"
        },

        {
            name:"Dashboard Polish",
            price:"KES 700"
        },

        {
            name:"Air Freshener",
            price:"KES 450"
        }

    ];

    return (

        <>

            <h3 className="mt-5 mb-4">
                Recommended Products
            </h3>

            <Row>

                {products.map((product,index)=>(

                    <Col md={4} key={index}>

                        <Card className="shadow-sm border-0 mb-4">

                            <Card.Body>

                                <h5>{product.name}</h5>

                                <h4 className="text-primary">
                                    {product.price}
                                </h4>

                                <Button className="w-100">
                                    Add
                                </Button>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </>

    );

}

export default RecommendedProducts;
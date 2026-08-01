import { Container, Row, Col } from "react-bootstrap";
import WishlistCard from "../../components/WishlistCard";

function Wishlist() {

    const products = [

        {
            image: "https://picsum.photos/300/200?1",
            name: "Premium Wash",
            price: "KES 1,500"
        },

        {
            image: "https://picsum.photos/300/200?2",
            name: "Tyre Shine",
            price: "KES 800"
        },

        {
            image: "https://picsum.photos/300/200?3",
            name: "Dashboard Polish",
            price: "KES 700"
        }

    ];

    return (

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Wishlist
            </h2>

            <Row>

                {products.map((product,index)=>(

                    <Col lg={4} md={6} key={index} className="mb-4">

                        <WishlistCard item={product}/>

                    </Col>

                ))}

            </Row>

        </Container>

    );

}

export default Wishlist;
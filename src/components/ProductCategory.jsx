import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductCategory({ title, products }) {

    return (

        <Container className="my-5">

            <h2 className="fw-bold text-primary mb-4">
                {title}
            </h2>

            <Row>

                {products.map((product, index) => (

                    <Col lg={3} md={6} className="mb-4" key={index}>

                        <ProductCard
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                        />

                    </Col>

                ))}

            </Row>

        </Container>

    );

}

export default ProductCategory;
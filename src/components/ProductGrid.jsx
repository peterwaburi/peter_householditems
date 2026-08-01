import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {

    return (

        <Row>

            {products.map((product,index)=>(

                <Col lg={3} md={6} key={index} className="mb-4">

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

    );

}

export default ProductGrid;
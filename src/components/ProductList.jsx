import {
    Row,
    Col,
    Alert
} from "react-bootstrap";

import useProducts from "../hooks/useProducts";

import ProductCard from "./ProductCard";
import PageLoader from "./PageLoader";
import EmptyState from "./EmptyState";

const ProductList = () => {

    const {
        products,
        loading,
        error
    } = useProducts();

    if (loading) {

        return (
            <PageLoader
                message="Loading products..."
            />
        );

    }

    if (error) {

        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );

    }

    if (products.length === 0) {

        return (
            <EmptyState
                title="No products available"
                message="There are currently no products available."
            />
        );

    }

    return (
        <Row className="g-4">

            {products.map(
                (product, index) => (

                    <Col
                        key={
                            product.id ??
                            product.product_id ??
                            index
                        }
                        sm={6}
                        lg={4}
                        xl={3}
                    >

                        <ProductCard
                            product={product}
                        />

                    </Col>

                )
            )}

        </Row>
    );
};

export default ProductList;
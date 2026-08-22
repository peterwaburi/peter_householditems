import {
    Card,
    Button,
    Badge
} from "react-bootstrap";

import {
    FaShoppingCart
} from "react-icons/fa";

import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {

    const { add } = useCart();

    const id =
        product?.id ??
        product?.product_id;

    const name =
        product?.product_name ??
        product?.name ??
        product?.title ??
        "Product";

    const description =
        product?.description ??
        "Quality automotive product.";

    const price = Number(
        product?.product_cost ??
        product?.price ??
        product?.cost ??
        0
    );

    const stock = Number(
        product?.stock ??
        product?.quantity ??
        product?.stock_quantity ??
        0
    );

    const image =
        product?.image_url ??
        product?.image ??
        product?.photo ??
        "";

    const handleAdd = () => {
        add(product);
    };

    return (
        <Card className="border-0 shadow-sm h-100">

            {image && (
                <Card.Img
                    variant="top"
                    src={image}
                    alt={name}
                    style={{
                        height: "200px",
                        objectFit: "cover"
                    }}
                />
            )}

            <Card.Body className="d-flex flex-column">

                <div className="d-flex justify-content-between gap-2 mb-2">

                    <Card.Title className="fw-bold mb-0">
                        {name}
                    </Card.Title>

                    {stock > 0 && (
                        <Badge bg="success">
                            In Stock
                        </Badge>
                    )}

                    {stock <= 0 && (
                        <Badge bg="danger">
                            Out of Stock
                        </Badge>
                    )}

                </div>

                <Card.Text className="text-muted">
                    {description}
                </Card.Text>

                <div className="mt-auto">

                    <h5 className="fw-bold text-primary mb-3">
                        KES {price.toLocaleString()}
                    </h5>

                    <Button
                        variant="primary"
                        className="w-100"
                        disabled={
                            stock <= 0 ||
                            !id
                        }
                        onClick={handleAdd}
                    >
                        <FaShoppingCart className="me-2" />
                        Add to Cart
                    </Button>

                </div>

            </Card.Body>

        </Card>
    );
};

export default ProductCard;
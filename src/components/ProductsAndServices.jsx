import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";

import LoadingSpinner from "./LoadingSpinner";
import { getProducts } from "../api/products";

const ProductsAndServices = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const addToCart = (product) => {

        const currentCart = JSON.parse(
            localStorage.getItem("cart") || "[]"
        );

        const identifier =
            product.id || product.product_name;

        const existingIndex = currentCart.findIndex(
            (item) =>
                (item.id || item.product_name) ===
                identifier
        );

        if (existingIndex !== -1) {

            currentCart[existingIndex].quantity =
                (currentCart[existingIndex].quantity || 1) + 1;

        } else {

            currentCart.push({
                ...product,
                quantity: 1
            });

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(currentCart)
        );

        window.dispatchEvent(
            new Event("cartUpdated")
        );

    };

    useEffect(() => {

        const loadProducts = async () => {

            setLoading(
                "Fetching products please wait..."
            );

            setError("");

            try {

                const response = await getProducts();

                const data =
                    response.data?.data ??
                    response.data?.products ??
                    response.data ??
                    [];

                setProducts(
                    Array.isArray(data)
                        ? data
                        : []
                );

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to load products."
                );

            } finally {

                setLoading("");

            }

        };

        loadProducts();

    }, []);

    const groupByCategory = (items) => {

        return items.reduce(
            (accumulator, product) => {

                const category =
                    product.product_cartegory ||
                    product.category ||
                    "General";

                if (!accumulator[category]) {

                    accumulator[category] = [];

                }

                accumulator[category].push(product);

                return accumulator;

            },
            {}
        );

    };

    const groupedProducts =
        groupByCategory(products);

    return (

        <div>

            <Container className="mt-4">

                {loading && (
                    <LoadingSpinner
                        message={loading}
                    />
                )}

                {error && (

                    <div className="alert alert-danger">

                        {error}

                    </div>

                )}

                {!loading &&
                    !error &&
                    products.length === 0 && (

                        <div className="alert alert-info">

                            No products available.

                        </div>

                    )}

                <div className="mb-5">

                    {Object.keys(groupedProducts).map(
                        (category) => (

                            <div
                                key={category}
                                className="mb-4"
                            >

                                <h4
                                    className="p-2 text-center rounded"
                                    style={{
                                        backgroundColor:
                                            "#3282B8",
                                        color:
                                            "#FFFFFF",
                                        fontWeight:
                                            "700"
                                    }}
                                >

                                    {category}

                                </h4>

                                <Row className="mt-3">

                                    {groupedProducts[
                                        category
                                    ].map(
                                        (product, index) => {

                                            const image =
                                                product.product_image ||
                                                product.image;

                                            const imageUrl =
                                                image
                                                    ? image.startsWith(
                                                        "http"
                                                    )
                                                        ? image
                                                        : `http://127.0.0.1:5000/uploads/${image}`
                                                    : "";

                                            return (

                                                <Col
                                                    md={3}
                                                    sm={6}
                                                    xs={12}
                                                    key={
                                                        product.id ||
                                                        index
                                                    }
                                                    className="mb-3"
                                                >

                                                    <Card className="shadow product-card h-100">

                                                        {imageUrl && (

                                                            <Card.Img
                                                                variant="top"
                                                                src={
                                                                    imageUrl
                                                                }
                                                                alt={
                                                                    product.product_name ||
                                                                    product.name ||
                                                                    "Product"
                                                                }
                                                                style={{
                                                                    height:
                                                                        "200px",
                                                                    objectFit:
                                                                        "cover"
                                                                }}
                                                            />

                                                        )}

                                                        <Card.Body>

                                                            <h5>

                                                                {
                                                                    product.product_name ||
                                                                    product.name
                                                                }

                                                            </h5>

                                                            <p className="text-muted">

                                                                {
                                                                    product.product_description ||
                                                                    product.description ||
                                                                    ""
                                                                }

                                                            </p>

                                                            <b
                                                                style={{
                                                                    color:
                                                                        "#FFC107"
                                                                }}
                                                            >

                                                                Ksh{" "}

                                                                {
                                                                    product.product_cost ??
                                                                    product.price ??
                                                                    0
                                                                }

                                                            </b>

                                                            <br />
                                                            <br />

                                                            <div className="d-flex align-items-center gap-2">

                                                                <button
                                                                    className="btn btn-sm flex-grow-1"
                                                                    style={{
                                                                        backgroundColor:
                                                                            "#1B262C",
                                                                        borderColor:
                                                                            "#1B262C",
                                                                        color:
                                                                            "#FFFFFF"
                                                                    }}
                                                                    onClick={() =>
                                                                        navigate(
                                                                            "/mpesa",
                                                                            {
                                                                                state:
                                                                                {
                                                                                    product
                                                                                }
                                                                            }
                                                                        )
                                                                    }
                                                                >

                                                                    Purchase Now

                                                                </button>

                                                                <button
                                                                    className="btn"
                                                                    style={{
                                                                        backgroundColor:
                                                                            "#3282B8",
                                                                        borderColor:
                                                                            "#3282B8",
                                                                        color:
                                                                            "#FFFFFF",
                                                                        borderRadius:
                                                                            "50%",
                                                                        width:
                                                                            "35px",
                                                                        height:
                                                                            "35px",
                                                                        padding:
                                                                            "0",
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        justifyContent:
                                                                            "center"
                                                                    }}
                                                                    onClick={() =>
                                                                        addToCart(
                                                                            product
                                                                        )
                                                                    }
                                                                    title="Add to Cart"
                                                                >

                                                                    <FaShoppingCart />

                                                                </button>

                                                            </div>

                                                        </Card.Body>

                                                    </Card>

                                                </Col>

                                            );

                                        }
                                    )}

                                </Row>

                            </div>

                        )
                    )}

                </div>

            </Container>

        </div>

    );

};

export default ProductsAndServices;
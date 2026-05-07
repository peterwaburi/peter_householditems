import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import BeautifulFooter from "./footer";
import { Container, Row, Col, Card } from "react-bootstrap";

const GetProducts = () => {

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");

    const img_url = "https://peter511.alwaysdata.net/static/images/";

    let navigator = useNavigate();

    const getProducts = async () => {

        setError("");
        setLoading("Fetching products please wait...");

        try {
            const response = await axios.get(
                "https://peter511.alwaysdata.net/api/get_products"
            );

            if (response.status === 200) {
                setProducts(response.data);
                setLoading("");
            }

        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // Group by category
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.product_cartegory || "Others";

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div>

            <NavBar />

            <Container className="mt-4">

                <h3 className="text-center text-success mb-3">
                    Choose from our premium products
                </h3>

                <h5 className="text-warning text-center">{loading}</h5>
                <h5 className="text-danger text-center">{error}</h5>

                {/* ================= CATEGORY LOOP ================= */}
                {Object.keys(groupedProducts).map((category) => (

                    <div key={category} className="mb-5">

                        {/* CATEGORY TITLE */}
                        <h3 className="bg-dark text-white p-2 text-center rounded">
                            {category}
                        </h3>

                        <Row className="mt-3">

                            {groupedProducts[category].map((product, index) => (

                                <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">

                                    <Card className="shadow product-card h-100">

                                        {/* FIRST IMAGE = LINK */}
                                        {index === 0 ? (
                                            <Link
                                                to="/getproducts"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={img_url + product.product_image}
                                                    style={{ height: "200px", objectFit: "cover" }}
                                                />
                                            </Link>
                                        ) : (
                                            <Card.Img
                                                variant="top"
                                                src={img_url + product.product_image}
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                        )}

                                        <Card.Body>

                                            <h5>{product.product_name}</h5>

                                            <p className="text-muted">
                                                {product.product_description}
                                            </p>

                                            <b className="text-warning">
                                                Ksh {product.product_cost}
                                            </b>

                                            <br /><br />

                                            <button
                                                className="btn btn-dark w-100"
                                                onClick={() =>
                                                    navigator("/mpesa", { state: { product } })
                                                }
                                            >
                                                Purchase Now
                                            </button>

                                        </Card.Body>

                                    </Card>

                                </Col>

                            ))}

                        </Row>

                    </div>

                ))}

            </Container>

            <BeautifulFooter />

        </div>
    );
};

export default GetProducts;